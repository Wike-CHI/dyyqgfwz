## ADDED Requirements

### Requirement: Color Palette Configuration
The system SHALL implement the Tree House Brewing color palette using Tailwind CSS variables.

#### Scenario: Verify Primary Colors
- **WHEN** the `bg-primary-dark` class is applied
- **THEN** the background color should be `rgb(52, 57, 77)`
- **WHEN** the `bg-primary-blue` class is applied
- **THEN** the background color should be `rgb(1, 0, 72)`

#### Scenario: Verify Accent Colors
- **WHEN** the `text-accent-amber` class is applied
- **THEN** the text color should be `rgb(236, 158, 5)`
- **WHEN** the `bg-accent-orange` class is applied
- **THEN** the background color should be `rgb(248, 172, 8)`

### Requirement: Typography Configuration
The system SHALL configure the specified font families (Metropolis, Poppins, Libre Franklin) for use via Tailwind utility classes.

#### Scenario: Verify Font Families
- **WHEN** the `font-metropolis` class is applied
- **THEN** the font family should include "Metropolis"
- **WHEN** the `font-poppins` class is applied
- **THEN** the font family should include "Poppins"
- **WHEN** the `font-libre` class is applied
- **THEN** the font family should include "Libre Franklin"

### Requirement: Fluid Grid Engine
The system SHALL provide a `FluidGrid` component that implements a responsive 24-column grid layout with customizable gaps.

#### Scenario: Fluid Grid Rendering
- **WHEN** the `FluidGrid` component is rendered
- **THEN** it should have `display: grid`
- **THEN** it should have a column template accommodating 24 columns plus gutters

### Requirement: Location Table Component
The system SHALL provide a `LocationTable` component for displaying structured data with specific styling for "Order Ahead" scenarios.

#### Scenario: Location Table Structure
- **WHEN** the `LocationTable` is rendered with data
- **THEN** it should render a `table` element with `border-collapse: collapse`
- **THEN** table headers should use the Metropolis font
- **THEN** table cells should use the Poppins font

### Requirement: Product Grid Component
The system SHALL provide a `ProductGrid` component that implements a fixed 3-column layout for merchandise.

#### Scenario: Product Grid Layout
- **WHEN** the `ProductGrid` is rendered
- **THEN** it should display items in a 3-column grid
- **THEN** the gap between columns should be consistent (e.g., 36px)

### Requirement: ZigZag Section Component
The system SHALL provide a `ZigZagSection` component that alternates the position of image and text content for each row.

#### Scenario: ZigZag Alternation
- **WHEN** the `ZigZagSection` renders multiple rows
- **THEN** odd rows should have image on the left and text on the right
- **THEN** even rows should have text on the left and image on the right (reversed)

### Requirement: MultiColumn Text Component
The system SHALL provide a `MultiColumnText` component for displaying text-heavy content in columns.

#### Scenario: Column Rendering
- **WHEN** the `MultiColumnText` is rendered with 3 items
- **THEN** it should display a 3-column grid layout
- **THEN** the gap between columns should be approximately 60px
