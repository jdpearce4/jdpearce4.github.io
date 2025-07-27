'use client'

import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface LatexRendererProps {
  content: string
  className?: string
}

export default function LatexRenderer({ content, className = '' }: LatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    try {
      // Parse LaTeX content and convert to HTML
      const htmlContent = processLatexContent(content)
      containerRef.current.innerHTML = htmlContent
    } catch (error) {
      console.error('LaTeX rendering error:', error)
      containerRef.current.innerHTML = `<div class="error">LaTeX rendering error: ${error}</div>`
    }
  }, [content])

  return (
    <div 
      ref={containerRef}
      className={`latex-content prose prose-invert max-w-none ${className}`}
      style={{
        lineHeight: '1.8', // Double spacing effect
        fontSize: '1.1rem',
        fontFamily: 'Georgia, serif', // More readable font for stories
      }}
    />
  )
}

function processLatexContent(content: string): string {
  // Remove LaTeX document structure commands and focus on content
  let processedContent = content
    .replace(/\\documentclass\[[^\]]*\]\{[^}]*\}/g, '') // documentclass with options
    .replace(/\\documentclass\{[^}]*\}/g, '')
    .replace(/\\usepackage\{[^}]*\}/g, '')
    .replace(/\\geometry\{[\s\S]*?\}/g, '') // geometry package settings
    .replace(/\\begin\{document\}/g, '')
    .replace(/\\end\{document\}/g, '')
    .replace(/\\maketitle/g, '')
    .replace(/\\doublespacing/g, '') // Remove spacing commands
    .replace(/\\singlespacing/g, '')
    .replace(/\\onehalfspacing/g, '')
    .replace(/\\setlength\{[^}]*\}\{[^}]*\}/g, '') // Remove length settings

  // Convert LaTeX sections to HTML headers
  processedContent = processedContent
    .replace(/\\section\{([^}]*)\}/g, '<h2>$1</h2>')
    .replace(/\\subsection\{([^}]*)\}/g, '<h3>$1</h3>')
    .replace(/\\subsubsection\{([^}]*)\}/g, '<h4>$1</h4>')
    .replace(/\\title\{([^}]*)\}/g, '<h1>$1</h1>')
    .replace(/\\author\{([^}]*)\}/g, '<div class="author">$1</div>')
    .replace(/\\date\{([^}]*)\}/g, '<div class="date">$1</div>')

  // Convert LaTeX text formatting
  processedContent = processedContent
    .replace(/\\textbf\{([^}]*)\}/g, '<strong>$1</strong>')
    .replace(/\\textit\{([^}]*)\}/g, '<em>$1</em>')
    .replace(/\\emph\{([^}]*)\}/g, '<em>$1</em>')
    .replace(/\\underline\{([^}]*)\}/g, '<u>$1</u>')
    // Handle LaTeX quotes
    .replace(/``([^']*)''/g, '"$1"') // LaTeX double quotes
    .replace(/`([^']*)'/g, "'$1'") // LaTeX single quotes
    // Handle special characters
    .replace(/\\&/g, '&')
    .replace(/\\%/g, '%')
    .replace(/\\$/g, '$')
    .replace(/\\#/g, '#')

  // Convert LaTeX lists
  processedContent = processedContent
    .replace(/\\begin\{itemize\}/g, '<ul>')
    .replace(/\\end\{itemize\}/g, '</ul>')
    .replace(/\\begin\{enumerate\}/g, '<ol>')
    .replace(/\\end\{enumerate\}/g, '</ol>')
    .replace(/\\item\s+/g, '<li>')

  // Handle paragraphs and spacing
  processedContent = processedContent
    // Clean up multiple spaces and normalize line breaks
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n\n') // Normalize paragraph breaks
    .split('\n\n')
    .map(paragraph => {
      const trimmed = paragraph.trim()
      if (trimmed && !trimmed.startsWith('<') && !trimmed.startsWith('%')) {
        // Check if this is dialog (starts with quotes)
        const isDialog = trimmed.startsWith('"') || trimmed.startsWith('"') || trimmed.startsWith('``')
        const dialogClass = isDialog ? 'ml-8' : '' // Indent dialog slightly
        
        // Add proper paragraph spacing for story format
        return `<p class="mb-6 leading-relaxed text-lg ${dialogClass}">${trimmed}</p>`
      }
      return trimmed
    })
    .filter(p => p.trim() !== '') // Remove empty paragraphs
    .join('\n')

  // Process inline math with KaTeX
  processedContent = processedContent.replace(/\$([^$]+)\$/g, (match, mathContent) => {
    try {
      return katex.renderToString(mathContent, { displayMode: false })
    } catch (error) {
      return `<span class="math-error">$${mathContent}$</span>`
    }
  })

  // Process display math with KaTeX
  processedContent = processedContent.replace(/\$\$([^$]+)\$\$/g, (match, mathContent) => {
    try {
      return katex.renderToString(mathContent, { displayMode: true })
    } catch (error) {
      return `<div class="math-error">$$${mathContent}$$</div>`
    }
  })

  // Process LaTeX equation environments
  processedContent = processedContent.replace(/\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g, (match, mathContent) => {
    try {
      return katex.renderToString(mathContent.trim(), { displayMode: true })
    } catch (error) {
      return `<div class="math-error">\\begin{equation}${mathContent}\\end{equation}</div>`
    }
  })

  // Process LaTeX align environments
  processedContent = processedContent.replace(/\\begin\{align\}([\s\S]*?)\\end\{align\}/g, (match, mathContent) => {
    try {
      return katex.renderToString(mathContent.trim(), { displayMode: true })
    } catch (error) {
      return `<div class="math-error">\\begin{align}${mathContent}\\end{align}</div>`
    }
  })

  return processedContent
}