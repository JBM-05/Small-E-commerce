import Card from "./Card";
import data from "../db/Db";
import { useContext  } from "react";
import { data1 } from "./Data";

const Products = () => {
    
    const { selectedCategory, selectedPrice, selectedColor , search } = useContext(data1);
    const filteredProducts = data.filter(({ category, color, newPrice ,title }) => {
        const isCategoryMatch = selectedCategory === "All" || category === selectedCategory;
        
        const isColorMatch = selectedColor === "All" || color === selectedColor;

        const isPriceMatch = selectedPrice === "All" ||
      (selectedPrice === "above150" && newPrice > 150) || 
      (selectedPrice === "0-50" && newPrice >= 0 && newPrice <= 50) ||
      (selectedPrice === "50-100" && newPrice > 50 && newPrice <= 100) ||
      (selectedPrice === "100-150" && newPrice > 100 && newPrice <= 150);
      const isTitle = search === "" || title.toLowerCase().includes(search.toLowerCase()); 
              return isCategoryMatch && isColorMatch && isPriceMatch && isTitle;
      });
  return <div className="container mx-auto pr-4 pl-1 py-8 ml-30 border-l-1 border-gray-300">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 border-b-1 border-gray-300">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice, company, color, category }, index) => {
                return   <Card
                    key={index}
                  img={img}
                  title={title}
                  star={star}
                  reviews={reviews}
                  prevPrice={prevPrice}
                  newPrice={newPrice}
                  company={company}
                  color={color}
                  category={category}
                />
              
            })}

        </div>
  </div>;
};

export default Products;
