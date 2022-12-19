import React, { useState } from "react";

type Theme = true | false;
type ThemeContextBoxLarge = {activatingLargeDropDown: Theme; LargeDropDownManagerButton: () => void; LargeExitButton: () => void; SuspendenExit: () => void;};
type Props = {
  children?: React.ReactNode  
};

export const ThemeContextBoxLarge = React.createContext<ThemeContextBoxLarge>(
  {} as ThemeContextBoxLarge
);

export const ThemeReactProviderBoxLarge: React.FC<Props> = ({ children }) => {
 
    const [activatingLargeDropDown, setActivatingLargeDropDown] = useState(false);
 const LargeDropDownManagerButton = () => {
    setActivatingLargeDropDown((current) => !current);
   
  };

  const LargeExitButton = () => {
    setActivatingLargeDropDown(false);
  };



  const SuspendenExit = () => {
    LargeExitButton();
  
  }; 

 

  return (
    <ThemeContextBoxLarge.Provider value={{ activatingLargeDropDown,LargeExitButton, LargeDropDownManagerButton ,SuspendenExit }}>
      {children}
    </ThemeContextBoxLarge.Provider>
  );
};