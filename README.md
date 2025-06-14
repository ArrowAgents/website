# ArrowAI Landing Page

A modern, responsive landing page for ArrowAI - a platform for building and running AI agents that work as your teammates.

## Features

- **Multi-page website** with dedicated sections for:
  - Home page with hero section, features, and testimonials
  - Platform page showcasing AI agent creation capabilities
  - Marketplace page for discovering pre-built agents
  - Documentation page with guides and resources
  - Local Runner page for on-premise deployment

- **Modern Design**:
  - Light theme only design
  - Responsive layout for all devices
  - Smooth animations with Framer Motion
  - Beautiful UI components with Tailwind CSS

- **Static Site Generation (SSG)**:
  - Configured for static HTML generation
  - Optimized for performance and SEO
  - Can be deployed to any static hosting service

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Radix UI** for accessible components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arrowai-landing
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

### Building for Production

To build the static site:

```bash
npm run build
```

This will generate static HTML files in the `out` directory that can be deployed to any static hosting service.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── platform/          # Platform page
│   ├── marketplace/       # Marketplace page
│   ├── docs/              # Documentation page
│   ├── local-runner/      # Local Runner page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── navigation.tsx     # Main navigation
│   └── footer.tsx         # Footer component
└── lib/                   # Utility functions
    └── utils.ts           # Class name utilities
```

## Key Features Highlighted

### ArrowAI Platform
- AI Agent Creation Platform with visual builder
- Multi-Agent Orchestration for team collaboration
- Agent Marketplace for discovering pre-built solutions
- Comprehensive Documentation and learning resources
- Local Agent Runner for on-premise deployment

### Design Philosophy
- **AI agents as teammates**: Emphasizing collaboration between humans and AI
- **Enterprise-ready**: Security, compliance, and scalability features
- **Developer-friendly**: Comprehensive docs and easy-to-use tools
- **Privacy-focused**: Local deployment options for sensitive data

## Deployment

The site is configured for static generation and can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build with `npm run build`
5. Submit a pull request

## License

This project is licensed under the MIT License.
