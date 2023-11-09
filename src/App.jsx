import { useEffect, useState } from "react";
import Products from "./Products";

export default function App() {
  const [data, setData] = useState([]);
  const [toggleAll, setToggleAll] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const allElements = data.map((product) => {
    return <Products key={product.id} product={product} />;
  });

  const filteredElements = data.filter((product) => product.available);

  const availableElements = filteredElements.map((product) => {
    return <Products key={product.id} product={product} />;
  });

  return (
    <main>
      <div className="container">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="btn-container">
          <button
            className={toggleAll ? "active" : ""}
            onClick={() => setToggleAll(true)}
          >
            All Products
          </button>
          <button
            className={!toggleAll ? "active" : ""}
            onClick={() => setToggleAll((prev) => !prev)}
          >
            Available Now
          </button>
        </div>
        <div className="products-container">
          {toggleAll ? allElements : availableElements}
        </div>
      </div>
    </main>
  );
}
