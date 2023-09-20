import React, { useState } from "react";

const UseState=()=>{

    //In useState count is current state and setCount is updated state.

    const[car,setCar]=useState({
brand:"Audi",
color:"white",
model:"2023"
    });

    const updateData=()=>{
        setCar(prevState=>{
            return{...prevState,color:"black",brand:"Mercedes",model:"2022"}
        } )

        
    }

    return(
        <>
        <div>
            <h3 style={{letterSpacing:"5px"}}>My car brand is <span style={{color:"red"}}>{car.brand}</span> ,its color is <span style={{color:"red"}}>{car.color}</span> and its model is <span style={{color:"red"}}>{car.model}</span></h3>
            <button onClick={updateData}>Update</button>
        </div>
        </>
    )
}

export default UseState;