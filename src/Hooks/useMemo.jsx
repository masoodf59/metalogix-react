import React, { useMemo, useState } from 'react';

const Memo=()=>{
    const [add,setAdd]=useState(0);
    const [subtract,setSubtract]=useState(100);

   const Multiplication = useMemo( function Multiply(){  // useMemo hook is use to reduce un wanted re-rendering and improve application performance.
    console.log("multiply");                            
   return  add * 10
   
},[add])
    return(
        <>
        <div>
            <p>{Multiplication}</p>
            <h3 className='mx-5'>{add}</h3>
            <button className='btn btn-success mx-4' onClick={()=>setAdd(add+1)}>Add</button>
            <br/>
            <br/>

            <h3 className='mx-5'>{subtract}</h3>
            <button className='btn btn-danger mx-4' onClick={()=>setSubtract(subtract-1)}>Subtract</button>
           

        </div>
        </>
    )
}

export default Memo;
