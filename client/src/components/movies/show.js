import React, { useState, useEffect } from "react";
import Axios from "axios";

function MovieShow(props) {
  const [blog, setBlog] = useState([]);
  console.log("Show props", props);
  useEffect(() => {
    Axios.get(`/api/movies/${props.match.params.id}`)
      .then(result => {
        console.log("show result", result);
        setBlog(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>Title: {blog.title}</h1>
      </header>

      <div>Description: {blog.description}</div>
      <div>Price: {blog.price}</div>
      <div>Rating: {blog.rating}</div>
    </div>
  );
}

export default MovieShow;
