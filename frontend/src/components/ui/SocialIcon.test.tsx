import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialIcon } from './SocialIcon';
import { siGithub } from 'simple-icons';

describe('SocialIcon', () => {
  const mockIcon = siGithub;

  it('renders the icon svg', () => {
    render(<SocialIcon icon={mockIcon} href="https://github.com" />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });

  it('has the correct accessible label', () => {
    render(<SocialIcon icon={mockIcon} href="#" label="GitHub Profile" />);
    expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
  });

  it('uses default label from icon title if not provided', () => {
    render(<SocialIcon icon={mockIcon} href="#" />);
    expect(screen.getByLabelText(mockIcon.title)).toBeInTheDocument();
  });

  it('links to the correct href', () => {
    render(<SocialIcon icon={mockIcon} href="https://example.com" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies custom class names', () => {
    render(<SocialIcon icon={mockIcon} href="#" className="custom-class" />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });
  
  it('applies size style', () => {
      render(<SocialIcon icon={mockIcon} href="#" size={48} />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('width', '48');
      expect(svg).toHaveAttribute('height', '48');
  });
});
