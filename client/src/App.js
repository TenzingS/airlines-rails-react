import React from "react";
import { Route, Switch } from 'react-router-dom'
import Airlines from "./Airlines";
import Airline from "./Airline";

function App() {

  return (
  <div className="App">
      <Switch>
          <Route exact path="/">
            <Airlines />
          </Route>
          <Route exact path="/airlines/:slug">
            <Airline />
          </Route>
      </Switch>
  </div>
  );
}


export default App;
