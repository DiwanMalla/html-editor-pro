import { NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

export async function POST(req: Request) {
  try {
    const { prompt, currentHtml, currentCss, currentJs } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not configured in the environment variables' },
        { status: 500 }
      );
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const systemPrompt = `You are an expert AI assistant specialized in web development. 
You are integrated into an online code editor that supports HTML, CSS, and JavaScript.
The user wants to generate or modify the code based on their prompt.

You MUST follow these rules strictly:
1. Provide the updated code for all three files: HTML, CSS, and JavaScript.
2. Reply with ONLY a single valid JSON object containing the fields "html", "css", and "js".
3. Do NOT include any other text, markdown blocks around the JSON, or explanations. Just the JSON object.
4. The values in the JSON object must be raw strings of code. Do NOT wrap them in markdown blocks (e.g., no \`\`\`html inside the JSON string).
5. If the user asks for a feature that doesn't require changes to one of the files, keep its current content in the JSON.
6. Ensure the JavaScript is valid and doesn't contain placeholders like "[Your code here]".

Current Project State:

HTML:
${currentHtml}

CSS:
${currentCss}

JavaScript:
${currentJs}

Example Response:
{
  "html": "...",
  "css": "...",
  "js": "..."
}`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'openai/gpt-oss-120b', // Use 70b for better reasoning and following instructions
      temperature: 0.1, // Even lower for stricter format adherence
      max_tokens: 6000,
      response_format: { type: "json_object" },
    });

    const generatedContent = chatCompletion.choices[0]?.message?.content || '{}';

    try {
      const parsedJSON = JSON.parse(generatedContent);
      return NextResponse.json(parsedJSON);
    } catch (e) {
      console.error("Failed to parse AI JSON response", generatedContent);
      return NextResponse.json({ error: "Invalid AI response format" }, { status: 500 });
    }
  } catch (error) {
    console.error('Error generating code:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate code' },
      { status: 500 }
    );
  }
}
