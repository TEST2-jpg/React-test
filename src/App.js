import React from "react";
import Header from "./components/Header";
import Places from "./components/Places";
import data from "./data";
import "./style.css"

function App() {
  const info = data.map(items => <Places key={items.id}{...items}/>)
  return (
    <div className="main">
      <Header/>
      {info}
    </div>
  )
}


export default App;