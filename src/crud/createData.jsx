import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";



const Create = () => {

    const navigate =  useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const addData = (e) => {
        e.preventDefault();
        axios.post(`https://63e06ae565b57fe606427bdc.mockapi.io/userCrud`, {
            u_name: name,
            u_email: email,
            u_phone: phone,
        })

        navigate("/read");
    }
    return (
        <>
            <div>

                <form action="" className="bg-light shadow p-4 m-auto mt-5 " style={{ width: "600px" }} onSubmit={addData}>
                    <h3 className="text-center fw-bold" style={{ fontFamily: "monospace" }}>User Data</h3>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="enter name.." />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="enter email.." />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label">Phone</label>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="enter phone.." />
                    </div>
                    <div className="mt-5 pb-4">
                        <button className="btn btn-primary w-100 ">Add Data</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Create;