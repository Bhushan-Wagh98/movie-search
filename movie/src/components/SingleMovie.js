import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  //   console.log(id);
  return (
    <div>
      <h1>Your Movie ID is {id}</h1>
    </div>
  );
};

export default SingleMovie;
