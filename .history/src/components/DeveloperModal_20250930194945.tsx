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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.6, ease: "easeOut" }}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="p-10">
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
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Diwan Malla
                </h3>
                <p className="text-cyan-300 mb-4">
                  Full Stack Developer & UI/UX Enthusiast
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Passionate about creating beautiful and functional web
                  applications. This HTML Editor Pro combines modern design with
                  powerful features to make coding fun! ✨
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">1+</div>
                  <div className="text-white/60 text-xs">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold text-lg">50+</div>
                  <div className="text-white/60 text-xs">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-pink-400 font-bold text-lg">∞</div>
                  <div className="text-white/60 text-xs">Coffee Cups</div>
                </div>
              </div>

              <div className="flex justify-center space-x-3 mb-6">
                <motion.a
                  href="https://github.com/diwanmalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://diwanportfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="mailto:malladipin@example.com"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.a>
              </div>

              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>and lots of</span>
                  <Coffee className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
