import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Dettagli del Post</h1>
      <p>Stai visualizzando i dettagli del post con ID: {id}</p>
    </div>
  );
};

export default PostDetail;