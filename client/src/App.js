import "./App.css";
import React from "react";
import Input from "./components/input";
import List from "./components/list";

function App() {
  const axios = require("axios").default;

  // Make a request for a user with a given ID
  axios
    .get("/express_backend")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <>
      <Input />
      <List />
    </>
  );
}

export default App;
