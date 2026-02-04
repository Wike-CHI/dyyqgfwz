## Context

The current homepage implementation deviates from the reference site in key visual areas: the grid is too irregular (masonry), the navigation bar is too short, and typography needs tuning.

## Goals / Non-Goals

**Goals:**
*   Implement a strict 4-column grid for "What's New" content.
*   Match the header dimensions (~173px height) and transparent behavior.
*   Update typography to `Poppins` for key elements.

**Non-Goals:**
*   Adding new content sections beyond what exists.
*   Dynamic data fetching.

## Decisions

### Grid Implementation
*   **CSS Grid**: Use `grid-template-columns: repeat(4, 1fr)` for desktop.
*   **Aspect Ratio**: Enforce `aspect-[3/4]` on image containers to match the vertical portrait style of the reference.
*   **Gap**: Use a moderate gap (e.g., `gap-4` or `gap-6`) to match the "clean" look.

### Navigation
*   **Height Strategy**: Instead of fixed height, use generous vertical padding (`py-8` or `py-10`) on the nav container to achieve the tall, spacious look.
*   **Logo**: Increase logo size to ~120px width.

### Buttons
*   **Style**: Switch to a "Ghost" or "Text Link" style for secondary actions, and a minimal solid/outline style for primary actions to match the cleaner aesthetic.

## Risks / Trade-offs

*   **Mobile Responsiveness**: The 4-column grid must collapse gracefully.
    *   **Mitigation**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` breakpoints.
