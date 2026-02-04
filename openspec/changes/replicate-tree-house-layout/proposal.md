## Why

The project requires a high-fidelity replication of the Tree House Brewing website's layout and visual design to provide an immersive user experience. This includes implementing complex grid systems, responsive tables, and specific typographic styles derived from a detailed layout analysis.

## What Changes

*   **Global Styles**: Configure Tailwind CSS with the project's color palette (Deep Blue, Amber) and typography (Metropolis, Poppins, Libre Franklin).
*   **Layout Components**:
    *   Implement a `FluidGrid` engine (24-column) for flexible content positioning.
    *   Create a `LocationTable` for the Order Ahead page.
    *   Develop a `ProductGrid` (3-column fixed) for the Merch page.
    *   Build a `ZigZagSection` for the Visiting page.
    *   Add `MultiColumnText` grid for the Careers page.
*   **Page Scaffolding**: Create the structure for Home, Order Ahead, Merch, Visiting, Events, and Careers pages using the new components.

## Capabilities

### New Capabilities
- `layout-system`: Defines the core visual foundation, including the grid engine, typography, color palette, and reusable layout components (FluidGrid, LocationTable, etc.).
- `site-structure`: Defines the specific page hierarchies and content composition for the replicated pages (Home, Order Ahead, Merch, Visiting, Events, Careers).

### Modified Capabilities
<!-- No existing capabilities are being modified as this is a new implementation -->

## Impact

*   **Frontend**:
    *   New components in `frontend/src/components/`.
    *   New page routes in `frontend/src/app/`.
    *   Updates to `frontend/tailwind.config.ts` and `frontend/src/app/globals.css`.
*   **Dependencies**: May require installing `clsx` or `tailwind-merge` for class handling if not present.
