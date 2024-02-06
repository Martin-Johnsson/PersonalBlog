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

  test('should render paragraph element', async () => {
    //Arrange
    render(<About />);

    const paragraph = screen.getByText(
      'An personal blog about all things surrounding development.'
    );

    // Act

    // Assert

    expect(paragraph).toBeInTheDocument();
  });
});
