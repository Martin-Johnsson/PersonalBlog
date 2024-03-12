'use server';

import PostList from './components/serverComponents/post/PostList';

export default async function Page() {
  const fetchPosts = await fetch('http://localhost:1337/api/blog-postss').then(
    (response: Response) => {
      if (!response.ok) {
        throw new Error(`Error fetching posts (Status: ${response.status})`);
      } else return response.json();
    }
  );

  return (
    <div>
      <h1>
        <PostList data={fetchPosts}></PostList>
      </h1>
    </div>
  );
}
