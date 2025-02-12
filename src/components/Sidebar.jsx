import {  useContext } from "react";
import { data1 } from "./Data";
const Sidebar = () => {
    const {selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, selectedColor, setSelectedColor} = useContext(data1);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  const handleColorChange = (event) => {
setSelectedColor(event.target.value);  
}
  return (
    <div className="container-sm mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h1>
      <ul className="space-y-2 text-center mb-5">
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value="All"
              checked={selectedCategory === "All"}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            All
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value="sneakers"
              checked={selectedCategory === "sneakers"}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            Sneakers
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value="flats"
              checked={selectedCategory === "flats"}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            Flat
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value="sandals"
              checked={selectedCategory === "sandals"}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            Sandles
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value="heels"
              checked={selectedCategory === "heels"}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            Heels
          </label>
        </li>
      </ul>

      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Prices</h1>
      <ul className="space-y-2 text-center mb-5">
      <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="price"
              value="All"
              checked={selectedPrice === "All"}
              onChange={handlePriceChange}
              className="mr-2"
            />
            All
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="price"
              value="0-50"
              checked={selectedPrice === "0-50"}
              onChange={handlePriceChange}
              className="mr-2"
            />
            $0 - $50
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="price"
              value="50-100"
              checked={selectedPrice === "50-100"}
              onChange={handlePriceChange}
              className="mr-2"
            />
            $51 - $100
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="price"
              value="100-150"
              checked={selectedPrice === "100-150"}
              onChange={handlePriceChange}
              className="mr-2"
            />
            $101 - $150
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="price"
              value="above150"
              checked={selectedPrice === "above150"}
              onChange={handlePriceChange}
              className="mr-2"
            />
            Over $150
          </label>
        </li>
      </ul>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Colors</h1>
      <ul className="space-y-2 text-center mb-5">
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="All"
              checked={selectedColor === "All"}
              onChange={handleColorChange}
              className="mr-2"
            />
            All
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="black"
              checked={selectedColor === "black"}
              onChange={handleColorChange}
              className="mr-2"
            />
            Black
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="blue"
              checked={selectedColor === "blue"}
              onChange={handleColorChange}
              className="mr-2"
            />
            Blue
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="red"
              checked={selectedColor === "red"}
              onChange={handleColorChange}
              className="mr-2"
            />
            Red
          </label>
        </li>
        <li  className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="green"
              checked={selectedColor === "green"}
              onChange={handleColorChange}
              className="mr-2"
            />
            Green
          </label>
        </li>
        <li className="flex items-center justify-start text-gray-600 hover:text-blue-500 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="color"
              value="white"
              checked={selectedColor === "white"}
              onChange={handleColorChange}
              className="mr-2"
            />
            White
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
