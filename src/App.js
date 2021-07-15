import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action} from "./urls"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Banner/>
        <RowPost title="Netflix Originals" url={originals}/>
        <RowPost title="Action Movies" isSmall url={action}/>
      </header>
    </div>
  );
}

export default App;
