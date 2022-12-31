import React from "react";
import styled from 'styled-components';

 
export const Containe = styled.div`
max-width: 136rem ;
padding-right: 1.5rem;
padding-left: 1.5rem;
margin-right: auto;
margin-left: auto;
box-sizing: border-box;
 
z-index: 1;
&:before,
&:after {
    content: " ";
    display: table;
}
&:after {
    clear: both;
}


`;

export const Row = styled.div`
width: 100%;
max-width: 120rem;
 float: left;

box-sizing: border-box;
&:before,
&:after {
    content: " ";
    display: table;
}
&:after {
    clear: both;
}


`;

interface BoxProps {
    grid?: any;
    children?: any;
    className?: string;
     
  }
  
  const Box: React.FunctionComponent<BoxProps> = (props) => <div className={props.className}>{props.children}</div>;
 
export const Column = styled(Box)`
width: 100%;
 padding: 0.25rem;
 min-height: 0.1rem;
 float: left;

 font-size: 2.2rem;
 color: white;
 
box-sizing: border-box;
width: ${  props  => (props.grid ? props.grid / 12 * 100 : '8:33')}% ;
 @media only screen and (max-width: 75em) {
 width: ${  props  => (props.grid ? props.grid / 12 * 100 : '8:33')}% ;
 }

`;