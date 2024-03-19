'use client';

import { Post, PostsResponse } from '../../../types/types';

const PostList = (postsResponse: PostsResponse) => {
  const posts: Post[] = postsResponse.data.data;
  console.log(postsResponse);

  return (
    <section>
      {posts.map((post: Post) => (
        <article key={post.id}>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.body}</p>
        </article>
      ))}
    </section>
  );
};

export default PostList;
