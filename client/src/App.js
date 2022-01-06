import React from "react";
import { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Airlines from "./Airlines/Airlines";
import Airline from "./Airline";

function App() {
  useEffect(() => {
    fetch("api/v1/airlines")
      .then((r) => r.json())
      .then((airlines) => console.log(airlines));
  }, []);

  return <div className="App">
  <BrowserRouter>
    <Route exact path = "/">
      <Airlines />
    </Route>
    <Route exact path = "/airlines/:slug">
      <Airline />
    </Route>
  </BrowserRouter>
</div>
}


export default App;
