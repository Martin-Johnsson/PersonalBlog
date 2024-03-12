'use client';

const PostList = (data) => {
  const postData = data.data.data;

  return (
    <section>
      {postData.map((post) => (
        <div key={post.id}>
          <h2>{post.attributes.title}</h2>
          <h2>{post.attributes.body}</h2>
        </div>
      ))}
    </section>
  );
};

export default PostList;
