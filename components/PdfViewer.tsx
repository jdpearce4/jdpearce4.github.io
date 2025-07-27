'use client'

import { useState } from 'react'

interface PdfViewerProps {
  pdfPath: string
  title: string
  className?: string
}

export default function PdfViewer({ pdfPath, title, className = '' }: PdfViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className={`pdf-viewer ${className}`}>
      {/* PDF Embed */}
      <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'w-full'}`}>
        {/* Controls */}
        <div className="flex justify-between items-center mb-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">PDF Document</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors"
            >
              Open in New Tab
            </a>
            <a
              href={pdfPath}
              download
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors"
            >
              Download
            </a>
          </div>
        </div>

        {/* PDF Iframe */}
        <div className={`bg-white rounded-lg overflow-hidden shadow-2xl ${isFullscreen ? 'h-5/6' : 'h-[800px]'}`}>
          <iframe
            src={pdfPath}
            width="100%"
            height="100%"
            title={title}
            className="border-0"
            style={{ minHeight: isFullscreen ? '90vh' : '800px' }}
          />
        </div>

        {/* Fallback for browsers that don't support PDF viewing */}
        <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 backdrop-blur-sm">
          <p className="text-gray-300 text-sm">
            If the PDF doesn't display properly, you can:
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              View in new tab
            </a>
            <a
              href={pdfPath}
              download
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Close button for fullscreen */}
        {isFullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}