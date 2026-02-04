## ADDED Requirements

### Requirement: Structured Content Grid
The system SHALL provide a `ContentGrid` component that replaces the previous masonry layout with a structured 4-column grid.

#### Scenario: 4-Column Layout
- **WHEN** the `ContentGrid` is rendered
- **THEN** it should display items in a 4-column grid on desktop screens

#### Scenario: Aspect Ratio Enforcement
- **WHEN** items are rendered in the grid
- **THEN** images should maintain a 3:4 portrait aspect ratio
- **THEN** images should cover the container area

## REMOVED Requirements

### Requirement: Masonry Grid Component
**Reason**: Replaced by Structured Content Grid to match reference site fidelity.
**Migration**: Use `ContentGrid` component instead.
