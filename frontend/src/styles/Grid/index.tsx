import React from "react";
import styled from 'styled-components';

 
export const Containe = styled.div`
max-width: 1360px;
padding-right: 15px;
padding-left: 15px;
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
max-width: 1200px;
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
 padding: .25rem;
 min-height: 1px;
 float: left;

 font-size: 22px;
 color: white;
 
box-sizing: border-box;
 @media only screen and (min-width: 768px) {
 width: ${  props  => (props.grid ? props.grid / 12 * 100 : '8:33')}% ;
 }

`;