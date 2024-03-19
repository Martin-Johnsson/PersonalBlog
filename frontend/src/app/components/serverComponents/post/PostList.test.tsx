import '@testing-library/jest-dom';
import PostList from './PostList';
import { render, screen } from '@testing-library/react';
import { postTestData } from '../../../assets/testData';

describe('PostList', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<PostList data={postTestData} />);

    // Act

    // Assert

    expect(<PostList data={postTestData} />);
  });
  test('should render heading', async () => {
    //Arrange
    render(<PostList data={postTestData} />);

    const postTitle = screen.getByRole('heading', { name: 'Title 1' });

    // Act

    // Assert

    expect(postTitle).toBeInTheDocument();
  });
  test('should render body text', async () => {
    //Arrange
    render(<PostList data={postTestData} />);

    const postBody = screen.getByText('Body 2');

    // Act

    // Assert

    expect(postBody).toBeInTheDocument();
  });
});
