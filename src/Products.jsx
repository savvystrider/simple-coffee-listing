import { FaStar } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";

export default function Products({ product }) {
  return (
    <div className="product">
      <div className="img-container">
        <img src={product.image} />
        {product.popular && <span className="popular-btn">Popular</span>}
      </div>
      <div className="heading-row">
        <h2>{product.name}</h2>
        {product.available ? (
          <span className="price">{product.price}</span>
        ) : (
          <span className="sold-out">Sold Out</span>
        )}
      </div>
      <div className="bottom-row">
        {product.votes > 0 ? (
          <span>
            <FaStar style={{ color: "#F6C768" }} />
          </span>
        ) : (
          <span>
            <AiOutlineStar style={{ color: "#6F757C" }} />
          </span>
        )}
        <span className="rating">{product.rating}</span>
        {product.votes > 0 ? (
          <span className="votes">({product.votes} votes)</span>
        ) : (
          <span className="no-rating">No ratings</span>
        )}
      </div>
    </div>
  );
}
