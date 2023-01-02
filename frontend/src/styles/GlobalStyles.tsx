import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
 
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body, #root {
    height: 100%;
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    @media (max-width: 25.75em) { //412 / 16 = 25.75em  1em = 16px
        font-size: 29%  ;
    }
  
    @media (max-width: 37.5em) { //600 / 16 = 37.5em  1em = 16px
        font-size: 30%;
    }
  

    @media (max-width: 56.25em) {//900 / 16 = 37.5em 
        font-size: 50%;
    }

    @media (max-width: 64em) {//1024 / 16 = 37.5em 
        font-size:  56.25%;
    }
  

  
}
*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto' , sans-serif;
}
button {
    cursor: pointer;
}

li {
    list-style: none;
}
`;

/**
 * Media Query Manager
 * 
 * 0 - 600px Phone
 * 
 * 600 - 900px Tablet portrait
 * 
 * 900 - 1200px Tablet landscape
 * 
 * 1800 Big Destio
 */