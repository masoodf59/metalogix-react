import React, { useReducer } from "react";



const InitialState = 0;

const Reducer = (state=InitialState,action)=>{
 switch(action){
    case "add":
        return state+1;
    case "subtract":
        return state -1;
    case "reset":
        return 0

        default :
         return state;

 }
}

const UseReducer=()=>{

    const [count , setCount]=useReducer(Reducer,InitialState)
    return(
        <>
<div>
    <h2>{count}</h2>
    <br/>
    <button onClick={()=>setCount('add')}>Add</button>
    <br/>
    <br/>
    <button onClick={()=>setCount('subtract')}>Subtract</button>
    <br/>
    <br/>

    <button onClick={()=>setCount('reset')}>Reset</button>
</div>
        </>
    )
}

export default UseReducer;