# Personal Website - James Pearce

A modern personal website showcasing astrophotography, writing, and blog posts with full LaTeX support.

## Features

- **Astrophotography Gallery**: High-resolution 6K image display with individual photo pages
- **Blog Section**: Technical articles with LaTeX equation support and syntax highlighting
- **Writing Section**: Academic papers and research with mathematical notation
- **About Page**: Personal introduction and background
- **LaTeX Support**: Full mathematical notation rendering using KaTeX
- **Responsive Design**: Mobile-friendly layout with dark mode support
- **Static Site**: Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **LaTeX Rendering**: KaTeX with react-katex
- **Markdown Processing**: react-markdown with remark-math and rehype-katex
- **Code Highlighting**: react-syntax-highlighter
- **Deployment**: GitHub Pages with automated CI/CD

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PersonalWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

### Adding Blog Posts

Create new Markdown files in `content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description of the post"
tags: ["tag1", "tag2"]
---

# Your Content Here

LaTeX equations are supported: $E = mc^2$

And code blocks:
\`\`\`python
print("Hello, world!")
\`\`\`
```

### Adding Writing Pieces

Create new Markdown files in `content/writing/` with frontmatter:

```markdown
---
title: "Paper Title"
date: "YYYY-MM-DD"
type: "Research Paper"
excerpt: "Abstract or summary"
tags: ["research", "astronomy"]
---

Your academic content with full LaTeX support.
```

### Adding Astrophotography

1. Add high-resolution images to `public/photos/`
2. Update the photo data in `app/astrophotography/page.tsx`
3. Add individual photo details in `app/astrophotography/[slug]/page.tsx`

## LaTeX Support

The site supports full LaTeX rendering for mathematical equations:

- Inline math: `$E = mc^2$`
- Block equations: `$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$`
- Complex expressions with matrices, integrals, summations, etc.

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow:

1. Builds the Next.js site
2. Exports static files
3. Deploys to GitHub Pages

### Manual Deployment

To build and export manually:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── astrophotography/   # Gallery pages
│   ├── blog/              # Blog pages
│   ├── writing/           # Writing pages
│   └── about/             # About page
├── components/            # React components
├── content/              # Markdown content
│   ├── blog/             # Blog posts
│   └── writing/          # Academic writing
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── photos/           # Astrophotography images
└── .github/workflows/    # GitHub Actions
```

## Contributing

This is a personal website, but suggestions and improvements are welcome through issues and pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.