import React, { useEffect, useState } from "react";
import { ProductDetails } from "./ProductDetails"
 
import {
  Container,Box1,Box2
} from "./styles";

interface ProductInterface {
  name: string;
  price: number;
  image: string;
}

interface StateInterface {
  products: ProductInterface[]
}
const Product: React.FC = () => {

  const [state, setState] = useState<StateInterface>({
    products:[]
  })
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <React.Fragment>
     
    
        <Container> 
       
      <Box1>
        <ProductDetails />
      </Box1>
      <Box2 />
      </Container>  
 
   
 
    </React.Fragment>
  );
};
export default Product;
