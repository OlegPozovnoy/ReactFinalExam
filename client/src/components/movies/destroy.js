import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context";

function Destroy(props) {
  const { setNotification } = useContext(NotificationContext);

  console.log("destroy props", props);
  useEffect(() => {
    Axios.post("/api/movies/destroy", {
      id: props.match.params.id
    }).then(resp => {
      setNotification(notificatoin => {
        return {
          ...notificatoin,
          status: "danger",
          message: "The movie has been erased"
        };
      });
    });
  }, [props]);

  return <Redirect to="/" />;
}

export default Destroy;
