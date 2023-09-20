import React, { createContext, useState } from "react";
import ChildA from "./childA";

export const UserContext = createContext();
const MainComp=()=>{
   const [name,setName]=useState("Masood Farid");
    return(
        <>
        <UserContext.Provider value={name}>
        <ChildA/>
        </UserContext.Provider>
        </>
    )
}

export default MainComp;