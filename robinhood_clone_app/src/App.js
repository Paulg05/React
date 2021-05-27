import "./App.css";
import Header from "./components/Header";
import Newsfeed from "./components/Newsfeed";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          {/* stats */}
          <Stats />
        </div>
      </div>
      {/* body */}
    </div>
  );
}

export default App;
