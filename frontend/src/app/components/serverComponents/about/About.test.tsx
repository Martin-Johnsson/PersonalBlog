import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import About from './About';

describe('About', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<About />);

    const AboutHeading = screen.getByText('About');

    // Act

    // Assert

    expect(AboutHeading).toBeInTheDocument();
  });
});
