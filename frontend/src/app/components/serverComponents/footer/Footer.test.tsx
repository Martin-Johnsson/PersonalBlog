import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    const footer = screen.getByText(`© Copyright ${currentYear}`);
    // Act

    // Assert

    expect(footer).toBeInTheDocument();
  });
});
