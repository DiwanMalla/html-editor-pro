"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HTMLEditor from "@/components/HTMLEditor";
import DeveloperModal from "@/components/DeveloperModal";

export default function Home() {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [isEditorFullscreen, setIsEditorFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-300 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200 to-cyan-300 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Header */}
      {!isEditorFullscreen && (
        <Header onDeveloperClick={() => setIsDeveloperModalOpen(true)} />
      )}

      {/* Main Content */}
      <main
        className={`relative ${
          isEditorFullscreen ? "h-screen" : "h-[calc(100vh-4.5rem)]"
        }`}
      >
        {/* Welcome Section */}
        {!isEditorFullscreen && (
          <motion.div
            className="px-6 py-12 text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to HTML Editor Pro
              </motion.h2>
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The ultimate web development playground. Write HTML, CSS, and
                JavaScript with
                <span className="font-semibold text-violet-600 dark:text-violet-400">
                  {" "}
                  real-time preview
                </span>
                ,
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {" "}
                  syntax highlighting
                </span>
                , and
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  {" "}
                  modern development tools
                </span>{" "}
                all in one place.
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Editor */}
        <div
          className={`${
            isEditorFullscreen ? "h-full" : "h-full px-6 pb-6"
          } relative z-10`}
        >
          <motion.div
            className="h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <HTMLEditor
              isFullscreen={isEditorFullscreen}
              onToggleFullscreen={() =>
                setIsEditorFullscreen(!isEditorFullscreen)
              }
            />
          </motion.div>
        </div>
      </main>

      {/* Developer Modal */}
      <DeveloperModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
      />
    </div>
  );
}
