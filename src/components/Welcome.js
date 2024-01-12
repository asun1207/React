import { useState } from "react";
import loginservice from "../services/loginservice";
function Welcome(props){
   
   const [user,setUser] = useState();
   
   return(
      <>
         <h1>Welcome </h1>
      </>
   )
}

export default Welcome;