import React from 'react';

const Fonts=()=>{
    return(
        <>
        <h1 style={{fontFamily:"Roboto Slab"}}>Masood Farid</h1>
        <h1 style={{fontFamily:"Croissant One"}}>Masood Farid</h1>
        <h1 style={{fontFamily:"Anton"}} className='text-center'>Grid System</h1>
         <div >
        <div className="row no-gutters" >
            <div className="col-md-3  col-sm-6 col-xs-12 bg-primary text-center">
                <h1 style={{fontFamily:"Anton"}}>first portion</h1>
            </div>
             <div className="col-md-3 col-sm-6 col-xs-12 bg-success text-center">
                <h1 style={{fontFamily:"Croissant One"}}>second portion</h1>
            </div>
             <div className="col-md-3 col-sm-6 col-xs-12 bg-danger text-center">
                <h1 style={{fontFamily:"Roboto Slab"}}>third portion</h1>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 bg-warning  text-center">
                <h1 style={{fontFamily:"Croissant One"}}>fourth portion</h1>
            </div>
        </div>
        </div>
        </>
    )
}

export default Fonts;