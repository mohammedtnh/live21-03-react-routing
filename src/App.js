import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

const App = ({ instructors }) => {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/instructors/:instructorSlug">
          <InstructorProfile instructors={instructors} />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route exact path="/">
          <Home instructors={instructors} />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </AppWrapper>
  );
};

export default App;
