export type Post = {
  id: number;
  attributes: {
    title: string;
    body: string;
  };
};

export type PostsResponse = {
  data: {
    data: Post[];
  };
};
