"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Sun, Moon, User, Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "next-themes";

interface HeaderProps {
  onDeveloperClick: () => void;
}

export default function Header({ onDeveloperClick }: HeaderProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  HTML Editor Pro
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                  Build • Create • Innovate
                </p>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Sun className="w-4 h-4" />
                <span>Light</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 relative z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo and Title */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group">
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
                        <div className="min-w-0 flex-1 sm:flex-none sm:block">
              <motion.h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight leading-tight truncate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                HTML Editor Pro
              </motion.h1>
              <motion.p
                className="text-xs sm:text-sm text-slate-400 mt-0.5 sm:mt-1 font-medium tracking-wide hidden xs:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Professional code editor
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1.5 lg:space-x-2">
            <motion.div
              className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1 shadow-inner"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`flex items-center space-x-1.5 lg:space-x-2 rounded-lg transition-all duration-200 text-xs lg:text-sm ${
                  resolvedTheme === "dark"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "bg-slate-900 text-white shadow-sm"
                }`}
              >
                {resolvedTheme === "dark" ? (
                  <Moon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                ) : (
                  <Sun className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                )}
                <span className="font-medium hidden lg:inline">
                  {resolvedTheme === "dark" ? "Dark" : "Light"}
                </span>
              </Button>
            </motion.div>

                        <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                window.open(
                  "https://github.com/diwanmalla/html-editor-pro",
                  "_blank"
                )
              }
              className="flex items-center space-x-1.5 lg:space-x-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 text-xs lg:text-sm"
            >
              <Github className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onDeveloperClick}
              className="flex items-center space-x-1.5 lg:space-x-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 text-xs lg:text-sm"
            >
              <User className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">Developer</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200/50 dark:border-slate-700/50 pt-3 sm:pt-4 pb-4 sm:pb-6 mt-3 sm:mt-4"
          >
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Appearance
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className={`w-full justify-start space-x-3 rounded-lg transition-all duration-200 ${
                    resolvedTheme === "dark"
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-900 shadow-sm"
                  }`}
                >
                  {resolvedTheme === "dark" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                  <span className="font-medium">
                    {resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
                  </span>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://github.com/diwanmalla/html-editor-pro",
                    "_blank"
                  );
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 py-3"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">View on GitHub</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onDeveloperClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 rounded-xl shadow-lg font-medium py-3"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Meet the Developer</span>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
