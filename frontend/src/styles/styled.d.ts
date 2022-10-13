import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    backgraundo: string;
    
    colors: {
      white: string;
      black: string;
      blue: string;
      yellow: string;
      success: string;
      darkLight: string;
    };
  }
}
