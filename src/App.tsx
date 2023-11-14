import React from "react";
import "./App.css";
import Topics from "./Topics";
import { PostCodeFinder } from "./Postcode";
import { SelectedButtonProvider } from "./Context/buttonContext";
import { Result } from "./Result";

const App = () => {
  return (
    <SelectedButtonProvider>
      <div className="App">
        <h1 className="mt-3">Data Detectives</h1>
        <main className="App-header my-3">
          <p>
            Use this tool to get an initial indication of wheather you property
            is likely to be suitable for a Halifax/Loyds/BM mortgage and the
            products available (e.g Green Mortgage) additional information can
            also be selected
          </p>
          {/* postcode could be removed for authenticated journey in app */}
          <Topics />
          <PostCodeFinder />
        </main>
      </div>
    </SelectedButtonProvider>
  );
};

export default App;
