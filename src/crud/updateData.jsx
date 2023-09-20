import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const navigate = useNavigate();
    const [singleData,setSingleData]=useState({
        u_name:"",
        u_email:"",
        u_phone:""
    });
    const {id} = useParams();

    const handleUpdate=()=>{
        axios.put(`https://63e06ae565b57fe606427bdc.mockapi.io/userCrud/${id}`,singleData).then((resp)=>{
            navigate('/read');
            console.log(resp)
            
        })
    }

    useEffect(()=>{
   
        axios.get(`https://63e06ae565b57fe606427bdc.mockapi.io/userCrud/${id}`).then(res=>setSingleData(res.data))
        
       
    },[])

   
    return(
        <>
        <form action="" className="bg-light shadow p-4 m-auto mt-5 " style={{ width: "600px" }} onSubmit={handleUpdate}>
                    <h3 className="text-center fw-bold" style={{ fontFamily: "monospace" }}>User Data</h3>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text"  onChange={(e)=>setSingleData({...singleData,u_name:e.target.value})} className="form-control" value={singleData.u_name} placeholder="enter name.." />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email"  onChange={(e)=>setSingleData({...singleData,u_email:e.target.value})}  className="form-control" value={singleData.u_email} placeholder="enter email.." />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label">Phone</label>
                        <input type="text"  onChange={(e)=>setSingleData({...singleData,u_phone:e.target.value})}  className="form-control" value={singleData.u_phone} placeholder="enter phone.." />
                    </div>
                    <div className="mt-5 pb-4">
                        <button className="btn btn-primary w-100 ">Update</button>
                    </div>

                </form>
        </>
    )
}

export default Update;