import React, { useState } from "react";

type Theme = true | false;
type ThemeContext = {activatingSmallDropDown: Theme; SmallDropDownManagerButton: () => void; smallExitButton: () => void;
  activatingLargeDropDown: Theme; LargeDropDownManagerButton: () => void; LargeExitButton: () => void; SuspendenExit: () => void;};
type Props = {
  children?: React.ReactNode  
};

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeReactProvider: React.FC<Props> = ({ children }) => {
 
  const [activatingSmallDropDown, setActivatingSmallDropDown] = useState<Theme>(false);
 
  const SmallDropDownManagerButton = () => {
    setActivatingSmallDropDown((current) => !current);
    setActivatingSmallDropDown(activatingSmallDropDown === false ? true : false);
  };
  const smallExitButton = () => {
    setActivatingSmallDropDown(false);
  };
 
  const [activatingLargeDropDown, setActivatingLargeDropDown] = useState(false);
 const LargeDropDownManagerButton = () => {
    setActivatingLargeDropDown((current) => !current);
   
  };

  const LargeExitButton = () => {
    setActivatingLargeDropDown(false);
  };



  const SuspendenExit = () => {
    LargeExitButton();
    smallExitButton();
  }; 
 

  return (
    <ThemeContext.Provider value={{ activatingSmallDropDown,smallExitButton, SmallDropDownManagerButton , 
      activatingLargeDropDown,LargeExitButton, LargeDropDownManagerButton ,SuspendenExit }}>
      {children}
    </ThemeContext.Provider>
  );
};