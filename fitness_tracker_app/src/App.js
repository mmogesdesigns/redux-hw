import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import UpdateExercise from "./components/UpdateExercise";
import ExerciseSummary from "./components/ExerciseSummary";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/exercises" component={Exercises} />
        <Route path="/update-exercise" component={UpdateExercise} />
        <Route path="/summary" component={ExerciseSummary} />
      </Switch>
    </Router>
  );
};

export default App;
