import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function MovieIndex() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Axios.get("/api/movies")
      .then(result => {
        console.log("index result", result);
        setMovies(result.data);
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
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>
                  <Link to={`/${movie._id}`}>{movie.title}</Link>
                </td>
                <td>{movie.description}</td>
                <td>{movie.price}</td>
                <td>{movie.rating}</td>
                <td>
                  <Link to={`/${movie._id}/edit`}>edit</Link>|
                  <Link to={`/${movie._id}/destroy`}>delete</Link>
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
