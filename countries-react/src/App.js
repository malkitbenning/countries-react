import countriesAll from "./countriesAll.json";
import Countries from "./Countries";
import "./App.css";

function App() {
  console.log(countriesAll);
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="world-header">Where in the world?</h2>
      </header>
      <section>
        <Countries countriesAll={countriesAll} />
      </section>
    </div>
  );
}

export default App;
