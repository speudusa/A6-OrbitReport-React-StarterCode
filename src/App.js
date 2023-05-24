import "./styles.css";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";

export default function App() {
  const [sat, satData] = useState(satData);
  const displaySats = [...new Set(satData.map((data)=> data.orbitType))];


  return (
    <div className="App">
      <Banner />
      <Buttons 
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table />
    </div>
  );
}
