## ADDED Requirements

### Requirement: Immersive Hero Section
The system SHALL provide a `HeroSection` component that occupies the full viewport height and supports video/image backgrounds with overlay content.

#### Scenario: Full Height Rendering
- **WHEN** the `HeroSection` is rendered
- **THEN** it should have a height of `100vh`

#### Scenario: Background Media
- **WHEN** the `HeroSection` is rendered
- **THEN** it should display a background video or image that covers the entire area

#### Scenario: Overlay Navigation
- **WHEN** the `HeroSection` is active
- **THEN** the main navigation bar should be transparent and positioned absolutely over the hero content

### Requirement: Navigation Transparency
The system SHALL ensure the navigation bar is transparent when at the top of the page (over the hero) and may become solid on scroll (optional).

#### Scenario: Initial State
- **WHEN** the page is at the scroll top
- **THEN** the navigation background should be transparent
