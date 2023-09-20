import React from "react";
import ChildC from "./childC";

const ChildB=()=>{
    return(
        <>
        <h2 style={{background:"red"}}>Child B</h2>
        <ChildC/>
        </>
    )
}

export default ChildB;