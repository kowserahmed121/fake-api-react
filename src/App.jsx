import Component from "./Components/Component/Component";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [phons, setPhons] = useState([]);
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhons(data));
  }, []);
  return (
    <>
      <h1>React Simple Project</h1>
      <div className="grid">
        {phons.map((phone) => (
          <Component key={phone.id} phone={phone}></Component>
        ))}
      </div>
    </>
  );
}

export default App;
