import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action, comedy, adventure, romance, family, horror, music, drama} from "./urls";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Banner/>
        <RowPost title="Netflix Originals" url={originals}/>
        <RowPost title="Action Movies" isSmall url={action}/>
        <RowPost title="Comedy" isSmall url={comedy}/>
        <RowPost title="Adventure" isSmall url={adventure}/>
        <RowPost title="Romance" isSmall url={romance}/>
        <RowPost title="Family" isSmall url={family}/>
        <RowPost title="Horror" isSmall url={horror}/>
        <RowPost title="Music" isSmall url={music}/>
        <RowPost title="Drama" isSmall url={drama}/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
