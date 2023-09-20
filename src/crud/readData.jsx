import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState();

    const navigate = useNavigate();
   

   const getData=()=>{
    const Get = axios.get(`https://63e06ae565b57fe606427bdc.mockapi.io/userCrud`).then((res) => setData(res.data));
    console.log(Get);
   }
       
    

    const delData = (id) => {
        const Delete = axios.delete(`https://63e06ae565b57fe606427bdc.mockapi.io/userCrud/${id}`).then(()=>{
            getData();
        })
 }

 useEffect(()=>{
    
    getData();
 },[])
    return (
        <>
            <div>
                <table className="table border ">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    {
                       data && data.map((resp) => {
                            return (
                                <tr>
                                    <td>{resp.u_name}</td>
                                    <td>{resp.u_email}</td>
                                    <td>{resp.u_phone}</td>
                                    <td className="text-center">
                                        <button className="btn bg-success text-light" onClick={()=>navigate(`/edit/${resp.id}`)}>Edit</button>
                                        <button className="btn bg-danger mx-2 text-light" onClick={() => delData(resp.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default Read;