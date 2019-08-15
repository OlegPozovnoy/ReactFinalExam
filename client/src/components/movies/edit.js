import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function MovieEdit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  console.log("edit props", props);

  useEffect(() => {
    Axios.get(`/api/movies/${props.match.params.id}`)
      .then(result => {
        console.log("edit result", result);
        setInputs(result.data);
        console.log("inputs", inputs);
      })
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/movies/update", {
      id: props.match.params.id,
      title: inputs.title,
      description: inputs.description,
      price: inputs.price,
      rating: inputs.rating
    })
      .then(resp => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value
      };
    });
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1> Edit Movie</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.title}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={handleInputChange}
              value={inputs.description}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              onChange={handleInputChange}
              defaultValue={inputs.price}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <select
              className="form-control"
              name="rating"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MovieEdit;
