'use server';

import PostList from './components/serverComponents/post/PostList';

// const { data } = useQuery(BLOG_POSTS);

export default async function Page() {
  const fetchPostDataResponse = await fetch(
    'http://localhost:1337/api/blog-posts'
  );
  const postData = await fetchPostDataResponse.json();

  return (
    <div>
      <h1>
        <PostList data={postData}></PostList>
      </h1>
    </div>
  );
}
