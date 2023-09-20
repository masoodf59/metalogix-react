import React, { useContext } from "react";
import { UserContext } from "./mainComp";


const ChildC=()=>{
   const user = useContext(UserContext);
   
    return(
        <>
        <h3 style={{background:"blue"}}>This value is getting from main component using UseContext Hook  <span style={{color:"red"}}>{user}.</span> </h3>
        </>
    )
}

export default ChildC;