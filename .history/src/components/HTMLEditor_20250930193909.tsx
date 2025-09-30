"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Editor } from "@monaco-editor/react";
import {
  Code,
  Palette,
  Zap,
  Eye,
  Download,
  Copy,
  RotateCcw,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EditorTab {
  id: string;
  label: string;
  language: string;
  icon: React.ReactNode;
  defaultValue: string;
}

const editorTabs: EditorTab[] = [
  {
    id: "html",
    label: "HTML",
    language: "html",
    icon: <Code className="w-4 h-4" />,
    defaultValue: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Editor Pro</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to HTML Editor Pro! 🚀</h1>
        <p>Start building your amazing web project here.</p>
        <button onclick="changeColor()" class="btn">Click me!</button>
    </div>
</body>
</html>`,
  },
  {
    id: "css",
    label: "CSS",
    language: "css",
    icon: <Palette className="w-4 h-4" />,
    defaultValue: `/* CSS Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: white;
    border-radius: 15px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    transition: transform 0.3s ease;
}

.container:hover {
    transform: translateY(-5px);
}

h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 2.5rem;
}

p {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
}

.btn {
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}`,
  },
  {
    id: "js",
    label: "JavaScript",
    language: "javascript",
    icon: <Zap className="w-4 h-4" />,
    defaultValue: `// JavaScript Code
function changeColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.querySelector('.container').style.borderLeft = \`5px solid \${randomColor}\`;
    document.querySelector('h1').style.color = randomColor;
    
    // Add some fun animation
    const container = document.querySelector('.container');
    container.style.transform = 'scale(1.02)';
    setTimeout(() => {
        container.style.transform = 'scale(1)';
    }, 200);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML Editor Pro is ready! 🚀');
    
    // Add keyboard shortcut
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            changeColor();
        }
    });
});`,
  },
];

interface HTMLEditorProps {
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export default function HTMLEditor({
  isFullscreen = false,
  onToggleFullscreen,
}: HTMLEditorProps) {
  const [activeTab, setActiveTab] = useState("html");
  const [code, setCode] = useState<Record<string, string>>({
    html: editorTabs[0].defaultValue,
    css: editorTabs[1].defaultValue,
    js: editorTabs[2].defaultValue,
  });
  const [showPreview, setShowPreview] = useState(true);

  const handleEditorChange = useCallback(
    (value: string | undefined, tabId: string) => {
      setCode((prev) => ({
        ...prev,
        [tabId]: value || "",
      }));
    },
    []
  );

  const resetCode = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset all code? This action cannot be undone."
    );
    if (confirmReset) {
      const defaultCode = editorTabs.reduce(
        (acc, tab) => ({
          ...acc,
          [tab.id]: tab.defaultValue,
        }),
        {}
      );
      setCode(defaultCode);
    }
  };

  const downloadHTML = () => {
    const fullHTML = `${code.html}
<style>
${code.css}
</style>
<script>
${code.js}
</script>`;

    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "editor-export.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    const fullHTML = `${code.html}
<style>
${code.css}
</style>
<script>
${code.js}
</script>`;

    try {
      await navigator.clipboard.writeText(fullHTML);
      // You could add a toast notification here
      console.log("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const generatePreview = () => {
    // Extract body content from HTML, removing the closing body and html tags
    const bodyContent = code.html
      .replace(/<!DOCTYPE.*?>/i, "")
      .replace(/<html[^>]*>/i, "")
      .replace(/<head>[\s\S]*?<\/head>/i, "")
      .replace(/<\/?html[^>]*>/gi, "")
      .replace(/<\/?body[^>]*>/gi, "")
      .trim();

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          ${code.css}
        </style>
      </head>
      <body>
        ${bodyContent}
        <script>
          ${code.js}
        </script>
      </body>
      </html>
    `;
  };

  const currentTab = editorTabs.find((tab) => tab.id === activeTab);

  return (
    <div
      className={`flex flex-col h-full bg-gray-50 dark:bg-gray-900 transition-colors ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            {editorTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-600 shadow-sm"
                    : "hover:bg-white/50 dark:hover:bg-gray-600/50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>{showPreview ? "Hide" : "Show"} Preview</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center space-x-2"
          >
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={downloadHTML}
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={resetCode}
            className="flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </Button>

          {onToggleFullscreen && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleFullscreen}
              className="flex items-center space-x-2"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
              <span>{isFullscreen ? "Exit" : "Fullscreen"}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor */}
        <div
          className={`${
            showPreview ? "w-1/2" : "w-full"
          } flex flex-col border-r border-gray-200 dark:border-gray-700`}
        >
          <div className="flex-1 bg-white dark:bg-gray-800">
            <Editor
              language={currentTab?.language}
              value={code[activeTab]}
              onChange={(value) => handleEditorChange(value, activeTab)}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                wordWrap: "on",
                automaticLayout: true,
                scrollBeyondLastLine: false,
                folding: true,
                lineDecorationsWidth: 10,
                lineNumbersMinChars: 3,
                padding: { top: 16 },
              }}
            />
          </div>
        </div>

        {/* Live Preview */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              className="w-1/2 bg-white dark:bg-gray-800"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "50%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              <div className="h-full flex flex-col">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Preview
                  </h3>
                </div>
                <div className="flex-1 bg-white">
                  <iframe
                    srcDoc={generatePreview()}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin"
                    title="Live Preview"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
