import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MeteoCard from "./components/MeteoCard";
import SearchBar from "./components/SearchBar";
import NextDays from "./components/NextDays";

function App() {
  return (
    <>
      <div className="body  p-4">
        <div className="App  d-flex m-5">
          <MeteoCard />
        </div>
        <div className="searchBar mx-auto my-3">
          <SearchBar />
        </div>
        <div className="d-flex">
          <NextDays />
        </div>
      </div>
    </>
  );
}

export default App;
