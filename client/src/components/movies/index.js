import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function MovieIndex() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    Axios.get("/api/movies")
      .then(result => {
        console.log("index result", result);
        setBlogs(result.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Movies</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Other</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>
                  <Link to={`/${blog._id}`}>{blog.title}</Link>
                </td>
                <td>{blog.description}</td>
                <td>{blog.price}</td>
                <td>{blog.rating}</td>
                <td>
                  <Link to={`/${blog._id}/edit`}>edit</Link>|
                  <Link to={`/${blog._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieIndex;
