import React, { useEffect, useState } from "react";

const UseEffect=()=>{
    const[count,setCount]=useState(0);

    useEffect(()=>{
    //   console.log('component mounting'); //component will mount
      console.log("component update"); //component will update 
     return ()=>{
        // console.log('component remove');  //component will unmount when component is removed it is called
     }
    },[count])
return(
    <>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
)
}

export default UseEffect;