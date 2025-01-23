import React from 'react';

const Posts = () => {

  const posts = [
    { id: 1, title: 'Post 1', content: 'Contenuto del primo post' },
    { id: 2, title: 'Post 2', content: 'Contenuto del secondo post' },
    { id: 3, title: 'Post 3', content: 'Contenuto del terzo post' },
  ];

  return (
    <div className="posts">
      <h1>Lista dei Post</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;