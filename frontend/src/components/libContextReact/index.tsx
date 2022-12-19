import  { createContext, useState } from "react";
 
  
export const userDetailsContext = createContext<any>(false);


const UserDetailsProvider = (props:any) => {

   const [userDetails, setUserDetails] = useState();
   return (
    <userDetailsContext.Provider  value={[userDetails, setUserDetails]}>
      {props.children}
    </userDetailsContext.Provider>
   );
}

export default UserDetailsProvider;