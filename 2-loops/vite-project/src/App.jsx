import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const items = [
    {
      image: "https://via.placeholder.com/150/92c952",
      name: "Jacket",
    },
    {
      image: "https://via.placeholder.com/150/771796",
      name: "Gadgets",
    },
    {
      image: "https://via.placeholder.com/150/24f355",
      name: "Cameras",
    },
    {
      image: "https://via.placeholder.com/150/d32776",
      name: "Appliances",
    },
    {
      image: "https://via.placeholder.com/150/f66b97",
      name: "Kids items",
    },
    {
      image: "https://via.placeholder.com/150/56a8c2",
      name: "Home & Living",
    },
    {
      image: "https://via.placeholder.com/150/b0f7cc",
      name: "Groceries",
    },
  ];

  const itemsComponent = [];

  for (let item of items) {
    itemsComponent.push(
      <div style={{ padding: "5px" }}>
        <img src={item.image} alt="" />
        <p>{item.name}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "100px" }}>
      {/* <div style={{ display: "flex" }}>{itemsComponent}</div> */}

      <div style={{ display: "flex" }}>
        {items.map((item) => (
          <div style={{ padding: "5px" }}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
