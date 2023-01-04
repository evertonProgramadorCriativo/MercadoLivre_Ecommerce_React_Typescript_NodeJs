export interface ProductInterface {
    name:string;
    price: number;
    image: string;
}
export interface ActionInterface{
    type: string;
    payload: unknown;
  }
export interface StateInterface {
    products: ProductInterface[];
    
}