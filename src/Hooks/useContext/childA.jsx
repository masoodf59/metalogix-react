import React from "react";
import ChildB from "./childB";

const ChildA=()=>{
    return(
        <>
        <h2  style={{background:"green"}}>Child A</h2>
        <ChildB/>
        </>
    )
}

export default ChildA;