import { getClient } from '../graphql/client';
import React from 'react';
import { BLOG_POSTS } from '../graphql/queries';

export const dynamic = 'force-dynamic';

interface Response {
  blogPosts: { id: number; attributes: { title: string }; email: string }[];
}

export default async function ServerSide() {
  const blogPosts = await getClient().query({
    query: BLOG_POSTS,
  });
  console.log(blogPosts.data.blogPosts.data);
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 20,
        }}
      >
        <h1> {blogPosts.data.blogPosts.data[0].attributes.title}</h1>
        <h1> {blogPosts.data.blogPosts.data[0].attributes.body}</h1>
      </div>
    </main>
  );
}
