import React, { useState } from "react";

const Form = () => {
   const [name,setName]=useState();
   const [email,setEmail]=useState();
   const [address,setAddress]=useState();

   

   
    

    const handleSubmit = (e) => {
        if(name && email && address){
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("address", address);
        }else{
            alert('fill the form');
        }
      
      
    }

    return (
        <>
            <form action="" style={{ width: "600px" }} className="p-4 bg-light shadow mx-auto mt-5" onSubmit={handleSubmit}>
                <h4 className="text-center">Form Data</h4>
                <div className="mt-4">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} placeholder="enter name.." onChange={ e  =>setName(e.target.value)} />
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" value={email} placeholder="enter email.." onChange={ e =>setEmail (e.target.value)} />
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="form-label">Address</label>
                    <input type="text" className="form-control" value={address} placeholder="enter address.." onChange={(e) =>setAddress(e.target.value)} />
                </div>

                <div className="mt-4" >
                    <button className="btn btn-success">Add Data</button>
                </div>
            </form>

            <div className="text-center mt-5 bg-primary shadow p-3">
                <span className="mx-5 fw-bold text-light">{localStorage.getItem("name")}</span>
                <span className="mx-5 fw-bold text-light">{localStorage.getItem("email")}</span>
                <span className="mx-5 fw-bold text-light">{localStorage.getItem("address")}</span>
            </div>
        </>
    )
}

export default Form;