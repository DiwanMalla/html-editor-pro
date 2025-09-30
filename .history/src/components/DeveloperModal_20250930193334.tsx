'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Globe, Mail, Coffee, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface DeveloperModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
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
            className="relative w-full max-w-md bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
            
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  DM
                </motion.div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Diwan Malla</h3>
                <p className="text-cyan-300 mb-4">Full Stack Developer & UI/UX Enthusiast</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Passionate about creating beautiful and functional web applications. 
                  This HTML Editor Pro combines modern design with powerful features to make coding fun! ✨
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">5+</div>
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
                  href="https://diwanmalla.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="mailto:diwan@example.com"
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
  )
}
