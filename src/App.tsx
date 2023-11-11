import React from "react";
import "./App.css";
import Topics from "./Topics";
import { PostCodeFinder } from "./Postcode";
import { Context } from "./Context";
import { SelectedTopics } from "./SelectedTopics";

const App = () => {
  return (
    <Context>
      <div className="App">
        <h1 className="my-3">Data Detectives</h1>
        <main className="App-header my-3">
          {/* postcode could be removed for authenticated journey in app */}
          <PostCodeFinder />
          <Topics />
          <SelectedTopics />
        </main>
      </div>
    </Context>
  );
};

export default App;
