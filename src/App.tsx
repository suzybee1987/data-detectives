import React from "react";
import "./App.css";
import { Topics } from "./Topics";
import { PostCodeFinder } from "./Postcode";

const App = () => {
  return (
    <div className="App App-header">
      <header>Data Detectives</header>
      <PostCodeFinder />
      <Topics />
    </div>
  );
};

export default App;
