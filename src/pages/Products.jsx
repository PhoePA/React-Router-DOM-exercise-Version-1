import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const PRODUCTS = [
    {
      id: 1,
      title: "Apple",
      description: "This is Apple.  Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Jet",
      description:
        "This is Boeing Jet. Assumenda nulla aliquid ducimus hic fugiat, veniam odio impedit rerum qui aperiam eligendi modi facilis incidunt mollitia laboriosam odit pariatur repellendus earum?",
    },
    {
      id: 3,
      title: "Bugadi",
      description:
        "This is Bugadi.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nulla aliquid ducimus hic fugiat.",
    },
  ];
  return (
    <div>
      {PRODUCTS.map((product) => (
        <Link key={product.id} to={`/product/${product.title}`}>
          <div className="card">
            <h3>The Title is - {product.title}</h3>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
