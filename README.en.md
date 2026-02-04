# Dayou Yuanqi - Tree House Brewing Clone Project

## 📖 Project Overview

Dayou Yuanqi is an open-source project inspired by the visual style of Tree House Brewing, developed using modern web technologies. This project aims to replicate the visual design and interactive experience of the Tree House Brewing website while maintaining a modular and extensible codebase.

## ✨ Key Features

- **Immersive Homepage** - Full-screen visual experience with dynamic background media
- **Multiple Layout Components** - Supports masonry, grid, zig-zag, and other layout patterns
- **Responsive Design** - Perfectly adapted to all screen sizes
- **Modular Architecture** - Highly reusable components for easy maintenance and expansion
- **TypeScript Support** - Complete type definitions for enhanced development experience

## 🛠 Technology Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | Next.js (App Router) |
| Styling Solution | Tailwind CSS + CSS Modules |
| Backend Language | Node.js (TypeScript) |
| Fonts | Poppins / Ma Shan Zheng / Libre Franklin / Metropolis |

## 📁 Project Structure

```
dayou-yuanqi/
├── backend/                 # Backend service
│   ├── src/
│   │   └── server.ts       # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # Frontend application
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   │   ├── api/        # API routes
│   │   │   ├── careers/    # Careers page
│   │   │   ├── merch/      # Merchandise page
│   │   │   ├── order-ahead/# Order-ahead page
│   │   │   ├── visiting/   # Visiting page
│   │   │   └── page.tsx    # Homepage
│   │   ├── components/     # React components
│   │   │   └── layout/     # Layout components
│   │   └── globals.css     # Global styles
│   ├── public/             # Static assets
│   │   ├── fonts/          # Font files
│   │   └── img/            # Image resources
│   ├── tailwind.config.ts
│   └── package.json
├── docs/                    # Project documentation
│   ├── layout_analysis.md  # Layout analysis
│   ├── project_initialization_spec.md
│   └── tech_stack.md       # Technology stack
└── openspec/               # OpenSpec change specification
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Start Development Servers

```bash
# Start frontend (port 3000)
cd frontend
npm run dev

# Start backend (port 3001)
cd backend
npm run dev
```

### Build Production Versions

```bash
# Build frontend
cd frontend
npm run build

# Build backend
cd backend
npm run build
```

## 📄 Page Overview

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Immersive visual display with video, quotes, and other modules |
| Order-Ahead | `/order-ahead` | List of store locations |
| Merchandise | `/merch` | Grid layout for product display |
| Visiting | `/visiting` | Information page using zig-zag layout |
| Careers | `/careers` | Careers information page |

## 🧩 Core Components

### Layout Components

| Component Name | Function |
|----------------|----------|
| `HeroSection` | Full-screen hero area with support for background media and overlay navigation |
| `Footer` | Site footer navigation |
| `NavBar` | Top navigation bar supporting transparent and non-transparent states |
| `ContentGrid` | Content grid layout |
| `FluidGrid` | Fluid grid system |
| `MasonryGrid` | Masonry grid layout |
| `ProductGrid` | Product display grid |
| `LocationTable` | Location information table |
| `ZigZagSection` | Zig-zag alternating layout |
| `MultiColumnText` | Multi-column text display |

## 📚 Documentation Guide

Project documentation is located in the `docs/` directory:

- **layout_analysis.md** - Layout analysis and implementation guide for Tree House Brewing website
- **project_initialization_spec.md** - Project initialization specifications
- **tech_stack.md** - Technology stack recommendations

## 📋 Development Guidelines

This project follows the OpenSpec change management specification. All major changes must go through the following process:

1. **Proposal** - Change proposal detailing the rationale and impact
2. **Design** - Detailed design document
3. **Specs** - Specific specification details
4. **Tasks** - Implementation task list

## 📄 License

This project is intended solely for learning and research purposes.

## 🤝 Contribution Guidelines

Pull requests and issues are welcome—help us improve this project together!