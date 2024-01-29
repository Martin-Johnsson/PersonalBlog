import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<Header />);

    const headerHeading = screen.getByText('Personal Blog');

    // Act

    // Assert

    expect(headerHeading).toBeInTheDocument();
  });
});
