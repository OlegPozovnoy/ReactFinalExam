import React from "react";
import { Route, Switch } from "react-router-dom";

import MovieIndex from "./movies/index";
import MovieShow from "./movies/show";
import MovieNew from "./movies/new";
import MovieEdit from "./movies/edit";
import MovieDestroy from "./movies/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MovieIndex} />
      <Route exact path="/new" component={MovieNew} />
      <Route exact path="/:id" component={MovieShow} />
      <Route exact path="/:id/edit" component={MovieEdit} />
      <Route exact path="/:id/destroy" component={MovieDestroy} />
    </Switch>
  );
}

export default Routes;