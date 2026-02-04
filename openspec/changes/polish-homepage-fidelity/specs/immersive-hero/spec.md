## MODIFIED Requirements

### Requirement: Immersive Hero Section
The system SHALL provide a `HeroSection` component that occupies the full viewport height and supports video/image backgrounds with overlay content, using Poppins font for the main title.

#### Scenario: Full Height Rendering
- **WHEN** the `HeroSection` is rendered
- **THEN** it should have a height of `100vh`
- **THEN** the H1 title should use `Poppins` font with `700` weight and approximately `62px` size

#### Scenario: Background Media
- **WHEN** the `HeroSection` is rendered
- **THEN** it should display a background video or image that covers the entire area

#### Scenario: Overlay Navigation
- **WHEN** the `HeroSection` is active
- **THEN** the main navigation bar should be transparent and positioned absolutely over the hero content
- **THEN** the navigation height should be approximately `173px` to accommodate larger branding

### Requirement: Navigation Transparency
The system SHALL ensure the navigation bar is transparent when at the top of the page (over the hero) and may become solid on scroll (optional).

#### Scenario: Initial State
- **WHEN** the page is at the scroll top
- **THEN** the navigation background should be transparent
