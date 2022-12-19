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