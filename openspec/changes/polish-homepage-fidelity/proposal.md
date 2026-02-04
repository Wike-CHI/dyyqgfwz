## Why

A detailed inspection of the reference site revealed discrepancies in typography, spacing, and grid layout. This change aims to polish the homepage fidelity by aligning fonts, navigation dimensions, and grid structures with the actual Tree House Brewing website.

## What Changes

*   **Typography Updates**:
    *   Change Hero H1 font to `Poppins` (Bold, 700), size ~62px.
    *   Ensure Navigation links use `Poppins`.
*   **Navigation Bar**:
    *   Increase height/padding to match the ~173px header of the reference site.
    *   Adjust Logo size (~123px width).
*   **Content Grid**:
    *   Replace `MasonryGrid` with a structured 4-column grid (`grid-cols-4`).
    *   Enforce 3:4 portrait aspect ratio for images.
*   **Buttons**:
    *   Simplify CTA buttons to be cleaner (minimal borders or text links).
*   **Footer**:
    *   Adjust background color and padding.

## Capabilities

### New Capabilities
<!-- No new capabilities, refining existing ones -->

### Modified Capabilities
- `immersive-hero`: Updating requirements for typography and navigation dimensions.
- `content-showcase`: Replacing masonry requirement with 4-column grid requirement.
- `site-footer`: Refining footer styling requirements.

## Impact

*   **Frontend Components**:
    *   `HeroSection.tsx`: Font updates.
    *   `NavBar.tsx`: Layout and dimension updates.
    *   `MasonryGrid.tsx`: Refactor to `ContentGrid.tsx` (or update in place).
    *   `Footer.tsx`: Style updates.
