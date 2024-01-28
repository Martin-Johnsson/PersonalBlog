import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Introduction', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<Header />);

    const personalBlog = screen.getByText('Personal Blog');

    // Act

    // Assert

    expect(personalBlog).toBeInTheDocument();
  });
});
