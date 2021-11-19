import React from "react";
import Product from "./Product";
import "./Products.css";

function Products({ products, addToCart }) {
  return (
    <div className="Products">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            addToCart={addToCart}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default Products;
