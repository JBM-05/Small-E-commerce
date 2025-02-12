import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import { data1 } from "./components/Data";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [search, setSearch] = useState("");
  return (
    <div>
      <data1.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
          selectedPrice,
          setSelectedPrice,
          selectedColor,
          setSelectedColor,
          search,
          setSearch,
        }}
      >
        <Nav />
        <div className="flex">
          <Sidebar />
          <Products />
        </div>
      </data1.Provider>
    </div>
  );
}

export default App;
