import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.npoint.io/bf8b8a686fd3adbc47e6`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default App;
