import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Cards from "./cards/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Reusebla></Reusebla> */}
      <Cards></Cards>
    </>
  );
}

export default App;
