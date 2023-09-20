import React, { useCallback, useState } from "react";
import Child from "./callbackChild";

const Callback=()=>{
    const[add,setAdd]=useState(0);
    const[count,setCount]=useState(0);

   const Learning=useCallback(()=>{  //callback work like usememo but it return a memoized function.
console.log("learning");
   },[count])
    return(
        <>
        <div className="text-center">
            <Child learn={Learning}/>
            <h3>{add}</h3>
            <button className="btn btn-primary" onClick={()=>setAdd(add+1)}>Add</button>
            <h3>{count}</h3>
            <button className="btn btn-success" onClick={()=>setCount(count+5)}>Increment</button>
        </div>
        </>
    )
}

export default Callback;