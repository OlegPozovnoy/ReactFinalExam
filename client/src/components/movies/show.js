import React, { useState, useEffect } from "react";
import Axios from "axios";

function MovieShow(props) {
  const [movie, setMovie] = useState([]);
  console.log("Show props", props);
  useEffect(() => {
    Axios.get(`/api/movies/${props.match.params.id}`)
      .then(result => {
        console.log("show result", result);
        setMovie(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>Title: {movie.title}</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{movie.description}</td>
              <td>{movie.price}</td>
              <td>{movie.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieShow;
