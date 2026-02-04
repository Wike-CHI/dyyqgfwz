## Why

The current homepage implementation provides a basic layout skeleton but lacks the visual fidelity and immersive experience of the Tree House Brewing website. This change aims to bridge the gap by implementing high-fidelity components, immersive media integration, and content-rich sections that match the reference site.

## What Changes

*   **Hero Section**:
    *   Upgrade to full-screen height (`h-screen`).
    *   Implement video/image background structure.
    *   Overlay transparent navigation bar.
    *   Refine typography for the main title.
*   **Navigation**:
    *   Make navigation transparent and overlay on the hero section.
    *   Implement sticky behavior (optional, prioritizing visual fidelity).
*   **Content Sections**:
    *   **"What's New" Grid**: A dense, masonry-style grid for latest updates.
    *   **"Tree House in Motion"**: A dedicated video showcase section.
    *   **Quote Section**: A minimal text-only section for the brand statement.
    *   **"Grain to Glass"**: A feature grid for distillery and coffee roastery.
    *   **Footer**: A comprehensive footer with links and copyright info.

## Capabilities

### New Capabilities
- `immersive-hero`: Defines requirements for full-screen, media-rich hero sections with overlay navigation.
- `content-showcase`: Defines requirements for diverse content presentation patterns including masonry grids, video showcases, and feature blocks.
- `site-footer`: Defines the structure and content of the global site footer.

### Modified Capabilities
- `site-structure`: Updating the Homepage structure requirements to include the new sections.

## Impact

*   **Frontend**:
    *   Major refactor of `frontend/src/app/page.tsx`.
    *   New components: `HeroSection`, `MasonryGrid`, `VideoSection`, `FeatureGrid`, `Footer`.
    *   Updates to `frontend/src/app/globals.css` for new utility classes if needed.
