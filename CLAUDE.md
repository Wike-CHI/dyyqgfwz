# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

大友元气 (Dayou Yuanqi) is a modern full-stack brewery website clone inspired by Tree House Brewing. It features an immersive visual experience with complex grid layouts, merchandise e-commerce, location management, and brewery information.

**Tech Stack:**
- Frontend: Next.js 16 (App Router), React 19, TypeScript 5.9
- Styling: Tailwind CSS 4 with custom 24-column fluid grid system
- Backend: Express.js 5 on Node.js with TypeScript
- Testing: Vitest 4 with React Testing Library
- Deployment: Vercel static hosting (primary), Tencent CloudBase (alternative)

## Development Commands

### Frontend (in `frontend/`)
```bash
npm run dev          # Start dev server on port 3000
npm run build        # Build for production (outputs to out/)
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run Vitest tests
```

### Backend (in `backend/`)
```bash
npm run dev          # Start dev server on port 4000 (uses nodemon)
npm run build        # Compile TypeScript to dist/
npm run start        # Start compiled server from dist/
```

### Testing
Run tests from the `frontend/` directory:
```bash
npm run test         # Run all tests once
```

**Note:** Testing framework is set up but minimal test coverage exists. Only `SocialIcon.test.tsx` is currently implemented.

## Architecture

### Monorepo Structure
```
大友元气官网/
├── frontend/          # Next.js app (port 3000)
├── backend/           # Express API (port 4000)
├── docs/              # Project documentation
└── openspec/          # Change management system
```

### Frontend Architecture

**Next.js App Router Structure:**
- `app/` - Route pages using App Router conventions
- `app/api/` - API routes (currently minimal)
- `components/layout/` - Major layout components
- `components/ui/` - Reusable UI components

**Key Layout Components:**
- `HeroSection` - Full-screen hero with background media and overlay navigation
- `NavBar` - Sticky header supporting transparent/solid states
- `Footer` - Site footer navigation
- `FluidGrid` - 24-column fluid grid system (core layout engine)
- `ContentGrid` - Standard content grid layouts
- `MasonryGrid` - Pinterest-style masonry layout
- `ZigZagSection` - Alternating left/right content layout
- `ProductGrid` - Merchandise display grid
- `LocationTable` - Location information table
- `MultiColumnText` - Multi-column text layouts

**Design System:**
- **Colors:** Primary dark (#34394D), primary blue (#010048), accent amber (#EC9E05), accent orange (#F8A808)
- **Fonts:** Poppins (default), Metropolis, Libre Franklin, Ma Shan Zheng (Chinese)
- **Grid:** Custom 24-column grid system (`grid-template-columns: repeat(24, minmax(0, 1fr))`)
- **Typography:** Geometric sans-serif stack for modern, clean aesthetic

### Backend Architecture

**Express Server** (`backend/src/server.ts`):
- Port 4000 in development
- CORS enabled
- Basic REST API structure
- Minimal implementation - mostly placeholder for future e-commerce/ordering features

### Page Routes

| Route | Purpose | Layout Pattern |
|-------|---------|----------------|
| `/` | Homepage | Hero + multiple grid sections |
| `/order-ahead` | Order placement | Location table |
| `/merch` | Merchandise store | Product grid |
| `/visiting` | Visitor information | Zig-zag sections |
| `/careers` | Job listings | Multi-column text |

## Development Workflow

### OpenSpec Change Management

This project uses the OpenSpec system for structured change management:

**Workflow:** Proposal → Design → Specs → Tasks

**Location:** `openspec/changes/<change-name>/`

**Artifacts:**
- `proposal.md` - Change rationale and impact
- `design.md` - Detailed design document
- `specs/` - Technical specifications
- `tasks.md` - Implementation task breakdown

**Example changes:**
- `replicate-tree-house-layout` - Initial layout system implementation
- `improve-homepage-fidelity` - Homepage visual enhancements
- `polish-homepage-fidelity` - Homepage refinements

When implementing features, check `openspec/` for relevant specifications and tasks.

### Design Philosophy

**Inspired by Tree House Brewing:**
- Immersive visual experience with full-width media
- High-density 24-column grid for precise element positioning
- Functional minimalism on data-dense pages (tables, lists)
- Heavy use of high-quality imagery with optimized loading

**Layout Patterns:**
1. **Fluid Grid Engine** - Break 12-column conventions with 24-column system
2. **Visual Hierarchy** - Hero sections → content grids → functional sections
3. **Responsive Design** - Mobile-first approach with desktop enhancements

### Image Optimization

Uses Next.js `next/image` component for:
- Automatic WebP/AVIF conversion
- Lazy loading
- Responsive sizing
- Compression

Place images in `frontend/public/img/` and reference via `/img/` path.

### Font Loading

Fonts stored in `frontend/public/fonts/`:
- Metropolis (variable weights)
- Poppins (variable weights)
- Libre Franklin
- Ma Shan Zheng (Chinese characters)

Loaded via Next.js font optimization in `layout.tsx`.

## Deployment

### Vercel (Primary)
Configuration in `vercel.json`:
- Static site generation
- SPA rewrites to `index.html`
- Build output: `frontend/out/`

### Tencent CloudBase (Alternative)
- Environment ID: `dyyq-0gxfchpt0a88ca22`
- Static hosting only
- Upload `frontend/out/` directory

**Build for deployment:**
```bash
cd frontend
npm run build
# Deploy contents of out/ directory
```

## Code Conventions

### TypeScript
- Strict mode enabled
- Path aliases: `@/*` → `src/*`
- Prefer explicit return types for public APIs

### Styling
- Use Tailwind utility classes for 80% of styling
- Use CSS Modules or inline styles for complex layout logic (e.g., grid positioning)
- Follow mobile-first responsive design
- Use semantic HTML5 elements

### Component Organization
- Layout components in `components/layout/`
- Reusable UI components in `components/ui/`
- Keep components focused and single-purpose
- Use composition over complex props

### Git Commits
Follow conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `refactor:` - Code refactoring

## Important Documentation

**Read these before major changes:**
- `docs/layout_analysis.md` - Deep dive into Tree House Brewing's layout patterns and implementation strategies
- `docs/tech_stack.md` - Rationale for technology choices
- `docs/project_initialization_spec.md` - Project setup specifications

## Common Tasks

### Adding a New Layout Component
1. Create component in `frontend/src/components/layout/`
2. Use `FluidGrid` as base for grid-based layouts
3. Export from appropriate page or create reusable component
4. Add props TypeScript interfaces
5. Consider responsive behavior (mobile → tablet → desktop)

### Adding a New Page
1. Create route in `frontend/src/app/<route>/page.tsx`
2. Use layout components (HeroSection, ContentGrid, etc.)
3. Add to navigation in `NavBar.tsx` if needed
4. Test responsive breakpoints

### Modifying Design System
1. Update colors in `frontend/tailwind.config.ts`
2. Add fonts to `frontend/public/fonts/`
3. Register fonts in `frontend/src/app/layout.tsx`
4. Update `--background` and `--foreground` variables in `globals.css` if changing base theme

### Backend API Development
1. Add routes to `backend/src/server.ts`
2. Use TypeScript interfaces for request/response types
3. Enable CORS for frontend communication
4. Consider adding API route handlers in `frontend/app/api/` for simpler needs

## Testing Notes

Testing framework is configured but under-developed. When adding tests:
- Place test files alongside components (`.test.tsx` suffix)
- Use Vitest + React Testing Library
- Test user interactions and component behavior
- Avoid testing implementation details

Focus testing on:
- Layout component rendering
- User interactions (buttons, links)
- Responsive behavior
- Data fetching (when API integration is complete)
