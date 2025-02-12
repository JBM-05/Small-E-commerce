import PropTypes from 'prop-types';

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
    return (
      <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg border-rounded  transition-shadow duration-300 transition-transform duration-500 ease-in-out transform hover:scale-105 ">
      <img src={img} alt={title} className="w-full h-48 object-contain" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">{company} • {category}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">{star}</span>
            <span className="ml-2 text-gray-600">({reviews} reviews)</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="line-through text-gray-400">${prevPrice}</span>
            <span className="text-green-600 font-bold text-lg">${newPrice}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Color:</span>
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: color }}></div>
          </div>
        </div>
      </div>
    );
};
Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    prevPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };
    export default Card;
  