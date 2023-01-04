import React , {useState,useEffect,  useReducer}from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from './routes'
import light from './styles/themes/light' 
import { ThemeReactProvider } from "./components/lib";
import { ctx } from "./components/lib/shoopingCard";
import { StateInterface } from "./components/lib/globalTypes";
import { reducerFn, initialState } from "./components/lib/cardRedux/index";
 
const App :React.FC = (): JSX.Element => {

 /**
  * const [state, setState] = useState<StateInterface>({
  products: []
})
  * 
  */

const [state, dispatch] = useReducer(reducerFn, initialState)

console.log("State", state)

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => dispatch({type: "ADD_PRODUCTS", payload: data}))
}, [])
  return (
    <React.Fragment>
      <ThemeReactProvider>
         <ctx.Provider value={state} >
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
        </ctx.Provider>
      </ThemeReactProvider>
    </React.Fragment>
  );
};
export default App;