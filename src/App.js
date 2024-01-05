import Index from "./Route/Index";
import "./App.css";
// import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <div style={{ backgroundColor: "#F4F4F4" }}>
        <Index />
      </div>
    </div>
  );
}

export default App;
