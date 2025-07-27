import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}

export interface WritingPiece {
  slug: string
  title: string
  date: string
  type: string
  excerpt: string
  content: string
  tags: string[]
  format?: 'markdown' | 'latex' | 'pdf'
  pdfPath?: string
}

const contentDirectory = path.join(process.cwd(), 'content')

export function getBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(blogDirectory)
  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const fullPath = path.join(blogDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.md$/, ''),
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
        tags: data.tags || []
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      tags: data.tags || []
    }
  } catch {
    return null
  }
}

function parseLatexFrontmatter(content: string) {
  // Look for LaTeX comments at the start of the file with metadata
  const frontmatterRegex = /^%\s*---\s*\n([\s\S]*?)%\s*---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (match) {
    const frontmatterText = match[1]
    const latexContent = match[2]
    
    // Parse YAML-like content from LaTeX comments
    const data: any = {}
    frontmatterText.split('\n').forEach(line => {
      const trimmed = line.replace(/^%\s*/, '').trim()
      if (trimmed.includes(': ')) {
        const [key, ...valueParts] = trimmed.split(': ')
        const value = valueParts.join(': ').replace(/^["']|["']$/g, '')
        if (key === 'tags' && value.includes(',')) {
          data[key] = value.split(',').map(tag => tag.trim())
        } else {
          data[key] = value
        }
      }
    })
    
    return { data, content: latexContent }
  }
  
  // Fallback: try to extract title from \title{} command
  const titleMatch = content.match(/\\title\{([^}]+)\}/)
  const title = titleMatch ? titleMatch[1] : ''
  
  return {
    data: { title },
    content
  }
}

function parsePdfMetadata(filename: string) {
  // Look for centralized PDF metadata file
  const metadataPath = path.join(process.cwd(), 'content', 'pdfs-metadata.json')
  
  if (fs.existsSync(metadataPath)) {
    try {
      const metadataContent = fs.readFileSync(metadataPath, 'utf8')
      const allMetadata = JSON.parse(metadataContent)
      
      if (allMetadata[filename]) {
        return allMetadata[filename]
      }
    } catch (error) {
      console.warn('Error reading PDF metadata:', error)
    }
  }
  
  // Fallback: extract basic info from filename
  const baseName = filename.replace('.pdf', '')
  const title = baseName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return {
    title,
    date: new Date().toISOString().split('T')[0],
    type: 'PDF Document',
    excerpt: `PDF document: ${title}`,
    tags: []
  }
}

export function getWritingPieces(): WritingPiece[] {
  const writingDirectory = path.join(contentDirectory, 'writing')
  const pdfDirectory = path.join(process.cwd(), 'public', 'pdfs')
  
  let pieces: WritingPiece[] = []

  // Process .md and .tex files from writing directory
  if (fs.existsSync(writingDirectory)) {
    const writingFiles = fs.readdirSync(writingDirectory)
      .filter(name => {
        const validExtensions = ['.md', '.tex']
        const excludeExtensions = ['.aux', '.log', '.synctex.gz', '.fdb_latexmk', '.fls', '.out', '.toc', '.bbl', '.blg', '.meta', '.pdf']
        
        return validExtensions.some(ext => name.endsWith(ext)) && 
               !excludeExtensions.some(ext => name.endsWith(ext))
      })
      .map(name => {
        const fullPath = path.join(writingDirectory, name)
        
        let data: any, content: string, format: 'markdown' | 'latex'
        
        if (name.endsWith('.tex')) {
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const parsed = parseLatexFrontmatter(fileContents)
          data = parsed.data
          content = parsed.content
          format = 'latex'
        } else {
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const parsed = matter(fileContents)
          data = parsed.data
          content = parsed.content
          format = 'markdown'
        }
        
        return {
          slug: name.replace(/\.(md|tex)$/, ''),
          title: data.title || '',
          date: data.date || new Date().toISOString().split('T')[0],
          type: data.type || (format === 'latex' ? 'LaTeX Document' : 'Article'),
          excerpt: data.excerpt || '',
          content,
          tags: data.tags || [],
          format
        }
      })

    pieces.push(...writingFiles)
  }

  // Process PDF files from public/pdfs directory
  if (fs.existsSync(pdfDirectory)) {
    const pdfFiles = fs.readdirSync(pdfDirectory)
      .filter(name => name.endsWith('.pdf'))
      .map(name => {
        const data = parsePdfMetadata(name)
        
        return {
          slug: name.replace(/\.pdf$/, ''),
          title: data.title || '',
          date: data.date || new Date().toISOString().split('T')[0],
          type: data.type || 'PDF Document',
          excerpt: data.excerpt || '',
          content: '',
          tags: data.tags || [],
          format: 'pdf' as const,
          pdfPath: `/pdfs/${name}`
        }
      })

    pieces.push(...pdfFiles)
  }

  return pieces.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getWritingPiece(slug: string): WritingPiece | null {
  try {
    // Try .md first, then .tex from writing directory
    let fullPath = path.join(contentDirectory, 'writing', `${slug}.md`)
    let fileContents: string
    let format: 'markdown' | 'latex' | 'pdf' = 'markdown'
    
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } catch {
      try {
        // Try .tex file
        fullPath = path.join(contentDirectory, 'writing', `${slug}.tex`)
        fileContents = fs.readFileSync(fullPath, 'utf8')
        format = 'latex'
      } catch {
        // Try .pdf file from public/pdfs directory
        const pdfPath = path.join(process.cwd(), 'public', 'pdfs', `${slug}.pdf`)
        if (fs.existsSync(pdfPath)) {
          format = 'pdf'
          fileContents = '' // PDFs don't have text content
        } else {
          throw new Error('File not found')
        }
      }
    }
    
    let data: any, content: string
    
    if (format === 'pdf') {
      data = parsePdfMetadata(`${slug}.pdf`)
      content = ''
    } else if (format === 'latex') {
      const parsed = parseLatexFrontmatter(fileContents)
      data = parsed.data
      content = parsed.content
    } else {
      const parsed = matter(fileContents)
      data = parsed.data
      content = parsed.content
    }
    
    return {
      slug,
      title: data.title || '',
      date: data.date || new Date().toISOString().split('T')[0],
      type: data.type || (format === 'pdf' ? 'PDF Document' : format === 'latex' ? 'LaTeX Document' : 'Article'),
      excerpt: data.excerpt || '',
      content,
      tags: data.tags || [],
      format,
      pdfPath: format === 'pdf' ? `/pdfs/${slug}.pdf` : undefined
    }
  } catch {
    return null
  }
}