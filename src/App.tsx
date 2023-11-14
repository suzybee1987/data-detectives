import React from "react";
import "./App.css";
import Topics from "./Topics";
import { PostCodeFinder } from "./Postcode";
import { SelectedButtonProvider } from "./Context/buttonContext";

const App = () => {
  return (
    <SelectedButtonProvider>
      <div className="App">
        <h1 className="mt-3">Data Detectives</h1>
        <main className="App-header my-3">
          {/* postcode could be removed for authenticated journey in app */}
          <PostCodeFinder />
          <Topics />
        </main>
      </div>
    </SelectedButtonProvider>
  );
};

export default App;
