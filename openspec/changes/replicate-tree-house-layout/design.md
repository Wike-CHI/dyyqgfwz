## Context

The project is a Next.js application that requires a specific, high-fidelity UI implementation based on the Tree House Brewing website. The analysis reveals a need for a complex 24-column fluid grid, specific typography, and several distinct layout patterns (Tables, ZigZag, Product Grids).

## Goals / Non-Goals

**Goals:**
*   Implement a robust, reusable component library for the identified layout patterns.
*   Configure Tailwind CSS to natively support the specific 24-column grid and color palette.
*   Create sample pages that demonstrate the fidelity of the replication.

**Non-Goals:**
*   Backend integration (this is a frontend-only layout task).
*   Pixel-perfect matching of every single inner page (focusing on the identified key templates).

## Decisions

### CSS Framework: Tailwind CSS
*   **Rationale**: Allows for rapid development and easy configuration of the custom design system tokens (colors, fonts).
*   **Implementation**: Will extend `tailwind.config.ts` to include:
    *   `colors`: `primary-dark`, `primary-blue`, `accent-amber`, etc.
    *   `fontFamily`: `metropolis`, `poppins`, `libre-franklin`.
    *   `gridTemplateColumns`: Custom 24-column definition.

### Grid Strategy: CSS Grid
*   **Rationale**: The 24-column requirement is best handled by CSS Grid. Flexbox is insufficient for the precise column spanning and alignment described.
*   **Mobile Strategy**: The grid will collapse to a single column or simplified structure on mobile viewports (`< 768px`).

### Component Architecture
*   **Atomic Design**: Small components (`Button`, `Text`) -> Molecules (`ProductCard`, `LocationRow`) -> Organisms (`FluidGrid`, `LocationTable`).
*   **Server Components**: Pages will be Server Components; interactive elements (if any) will be Client Components.

## Risks / Trade-offs

*   **Font Availability**: `Metropolis` is not available via Google Fonts.
    *   **Mitigation**: Will attempt to use a local font file if available, or fallback to a similar sans-serif font (e.g., `Montserrat`) if the file is missing, to ensure the app remains runnable.
*   **Grid Complexity**: 24 columns can be unwieldy.
    *   **Mitigation**: Create helper components or classes that abstract common span patterns (e.g., `span-10`, `span-12`).
