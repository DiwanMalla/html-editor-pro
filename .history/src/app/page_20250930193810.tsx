'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import HTMLEditor from '@/components/HTMLEditor'
import DeveloperModal from '@/components/DeveloperModal'

export default function Home() {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false)
  const [isEditorFullscreen, setIsEditorFullscreen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      {!isEditorFullscreen && (
        <Header onDeveloperClick={() => setIsDeveloperModalOpen(true)} />
      )}

      {/* Main Content */}
      <main className={`${isEditorFullscreen ? 'h-screen' : 'h-[calc(100vh-4rem)]'}`}>
        {/* Welcome Section */}
        {!isEditorFullscreen && (
          <motion.div 
            className="px-4 py-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to HTML Editor Pro
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The ultimate web development playground. Write HTML, CSS, and JavaScript with real-time preview, 
              syntax highlighting, and modern development tools all in one place.
            </p>
          </motion.div>
        )}

        {/* Editor */}
        <div className={`${isEditorFullscreen ? 'h-full' : 'h-full px-4 pb-4'}`}>
          <motion.div
            className="h-full rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HTMLEditor
              isFullscreen={isEditorFullscreen}
              onToggleFullscreen={() => setIsEditorFullscreen(!isEditorFullscreen)}
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
  )
}
