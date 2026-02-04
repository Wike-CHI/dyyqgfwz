## Context

The current homepage is a functional skeleton but lacks the specific visual polish and content density of the target site. This design focuses on upgrading the `page.tsx` and introducing specialized components to handle the complex layout requirements (masonry grid, full-screen hero).

## Goals / Non-Goals

**Goals:**
*   Replicate the visual hierarchy and "feel" of Tree House Brewing's homepage.
*   Implement a flexible `MasonryGrid` that can handle mixed aspect ratio content (simulating Instagram feeds).
*   Create a reusable `HeroSection` that supports video backgrounds.

**Non-Goals:**
*   Live Instagram API integration (we will use static mock data).
*   Perfect pixel matching of dynamic content (since content changes daily).

## Decisions

### Component Structure
*   **HeroSection**: Will use a `video` tag with `object-cover` for the background, overlaid with a gradient and absolute positioned text/nav.
*   **Navigation**: Will be refactored into a `NavBar` component that accepts a `transparent` prop.
*   **MasonryGrid**: Will use CSS Grid with `grid-auto-flow: dense` or a column-count approach to simulate the masonry look. Given the 24-column system, we can span items across different column counts (e.g., span-8, span-12) to create variety.

### Data Strategy
*   **Static Data**: We will define a `homepageData.ts` file or object within the page to hold the mock content for "What's New", ensuring it's easy to update or swap for an API later.

## Risks / Trade-offs

*   **Video Performance**: Auto-playing full-screen video can impact performance.
    *   **Mitigation**: Use a lightweight placeholder or optimized video format. For this MVP, we might use a high-quality static image if a suitable video isn't available, or a standard placeholder video.
*   **Grid Complexity**: True masonry (packing) is hard with pure CSS Grid.
    *   **Mitigation**: We will manually assign spans to specific items to create the "designed" look rather than relying on auto-packing.
