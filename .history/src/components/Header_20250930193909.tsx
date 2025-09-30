"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sun,
  Moon,
  User,
  Github,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "next-themes";

interface HeaderProps {
  onDeveloperClick: () => void;
}

export default function Header({ onDeveloperClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                v2.0 Pro
              </span>
            </motion.div>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="relative overflow-hidden"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === "dark" ? 180 : 0,
                  scale: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="w-4 h-4" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === "dark" ? 0 : -180,
                  scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <Moon className="w-4 h-4" />
              </motion.div>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                window.open(
                  "https://github.com/diwanmalla/html-editor-pro",
                  "_blank"
                )
              }
              className="flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onDeveloperClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              <User className="w-4 h-4" />
              <span>Developer</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
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
            className="md:hidden border-t border-gray-200 dark:border-gray-700 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Theme
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="flex items-center space-x-2"
                >
                  {theme === "dark" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                  <span>{theme === "dark" ? "Dark" : "Light"}</span>
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
                className="flex items-center justify-start space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onDeveloperClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-start space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                <User className="w-4 h-4" />
                <span>Meet the Developer</span>
              </Button>

              <div className="flex items-center justify-center pt-2">
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    v2.0 Pro
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
