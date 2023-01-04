import React from "react";
 
const Product: React.FC = (): JSX.Element => {
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

export  {Product}
