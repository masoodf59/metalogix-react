import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const localPassword = localStorage.getItem('password');
    const localEmail = localStorage.getItem('email');

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === localEmail && password === localPassword){
            alert('login Successfully');
        }else{
            alert('wrong email and password');
        }
        
    }

    return (
        <>
            <div className="mt-5 " >
                <form action="" className="bg-light shadow p-4 text-center" style={{ width: "440px", borderRadius: "15px", marginLeft: "35rem" }} >
                    <h4>Login</h4>
                    <TextField label="Email" onChange={(e) => setEmail(e.target.value)} className="mt-3 w-100" >Email</TextField><br />
                    <TextField label="Password" onChange={(e) => setPassword(e.target.value)} className="mt-3 w-100">Password</TextField><br />

                    <Button variant="contained" className="mt-4 w-100" onClick={handleSubmit}>Login</Button>
                </form>
            </div>
        </>
    )
}

export default Auth;