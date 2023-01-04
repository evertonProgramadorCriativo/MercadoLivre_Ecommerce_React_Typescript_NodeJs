import React from "react";
import "./styles.css"
const ProductDetails: React.FC = (): JSX.Element => {
  return (
  <div className="Product">
    <div className="Product__thumbnail">
        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Mens Cotton Jacket" />

    </div>
    <h2 className="Product__title">
       Mens Cotton Jacket
    </h2>
  </div>
  );
};

export  { ProductDetails } 
