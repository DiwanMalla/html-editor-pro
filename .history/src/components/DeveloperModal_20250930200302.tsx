"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Globe, Mail, Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperModal({
  isOpen,
  onClose,
}: DeveloperModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.6, ease: "easeOut" }}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
              <div className="flex justify-center mb-8">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    DM
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Diwan Malla
                </h3>
                <p className="text-violet-600 dark:text-violet-400 mb-4 font-semibold">
                  Full Stack Developer & UI/UX Enthusiast
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Passionate about creating beautiful and functional web
                  applications. This HTML Editor Pro combines modern design with
                  powerful features to make coding fun! ✨
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-violet-500 font-bold text-2xl">1+</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Years Coding
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-purple-500 font-bold text-2xl">50+</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Projects Built
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-pink-500 font-bold text-2xl">∞</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Coffee Cups
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <motion.a
                  href="https://github.com/diwanmalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    GitHub
                  </span>
                </motion.a>
                <motion.a
                  href="https://diwanportfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Portfolio
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:malladipin@gmail.com"
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </span>
                </motion.a>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Made with</span>
                  <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                  <span className="font-medium">and lots of</span>
                  <Coffee className="w-5 h-5 text-amber-500" />
                  <span className="font-medium">by Diwan Malla</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
