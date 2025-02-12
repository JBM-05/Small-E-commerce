import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { data1 } from "./Data";
import { useContext } from "react";
const Nav = () => {
 const {setSearch} = useContext(data1);
  return (
    <div className="flex items-center justify-around py-4 px-8 bg-white shadow-md">
      <div className="relative w-80 ml-20"> 
        <input
          className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter the item here...."
          onChange={(e)=>{
            setSearch(e.target.value);
          }}
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none cursor-pointer" />
      </div>
      <div className="ml-4 flex">
        <MdOutlineShoppingCart className="text-2xl text-gray-500 mr-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500" />
        <FaRegUser className="text-2xl text-gray-500 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Nav;
