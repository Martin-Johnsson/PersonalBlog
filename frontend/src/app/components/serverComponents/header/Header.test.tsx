import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event';
import About from '../about/About';
import { createMocks } from 'node-mocks-http';

describe('Header', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<Header />);

    const headerHeading = screen.getByText('Personal Blog');

    // Act

    // Assert

    expect(headerHeading).toBeInTheDocument();
  });
  test('should render a search button', async () => {
    //Arrange
    render(<Header />);

    const searchButton = screen.getByRole('button');

    // Act

    // Assert

    expect(searchButton).toBeInTheDocument();
  });
  test('should render a search field when search button is clicked', async () => {
    //Arrange
    render(<Header />);

    const searchButton = screen.getByRole('button', { name: 'Search Button' });

    // Act
    await userEvent.click(searchButton);

    const searchField = await screen.findByPlaceholderText('Search...');

    // Assert
    await waitFor(() => {
      expect(searchField);
    });
  });
  test('should render redirect to /about when clicking on About Link', async () => {
    //Arrange
    render(<Header />);
    const aboutLink = screen.getByRole('link');
    const { req, res } = createMocks({
      method: 'GET',
    });

    // Act
    await userEvent.click(aboutLink);
    // Assert

    expect(<About />);
  });
});
