import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<Footer />);

    const footer = screen.getByText('Copyright 2024');

    // Act

    // Assert

    expect(footer).toBeInTheDocument();
  });
});
