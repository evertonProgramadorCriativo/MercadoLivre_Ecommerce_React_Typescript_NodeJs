import React, { useEffect } from "react";
import {
  Container,Box1,Box2
} from "./styles";
const Product: React.FC = () => {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <React.Fragment>
      <Container>
      <h1>Product</h1>
      <Box1 />
      <Box2 />
      </Container>
 
    </React.Fragment>
  );
};
export default Product;
