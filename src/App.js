import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  const [comp, setComp] = useState(Home);

  return (
    <>
      <header>
        <button onClick={() => setComp(Home)}>Home</button>
        <button onClick={() => setComp(About)}>About</button>
        <button onClick={() => setComp(NotFound)}>Users</button>
      </header>
      <hr />
      <main children={comp} />
    </>
  );
}