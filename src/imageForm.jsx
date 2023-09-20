import axios from "axios";
import React, { useState } from "react";


const ImageForm = () => {

    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', file.name);

        axios.post('https://65099afbf6553137159bbbc9.mockapi.io/crud-image', [...formData] )



    }
    return (
        <>
            <h2 className="text-center mt-5">Form Data</h2>
            <form action="" className="bg-light shadow p-4 mx-auto" style={{ width: "400px" }}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="enter title.. " />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="enter description.. " />
                </div>
                <div>
                    <label htmlFor="">file</label>
                    <input className="form-control" onChange={(e) => setFile(e.target.files[0])} type="file" />
                </div>
                <div>
                    <button className="btn btn-success mt-4 w-100" onClick={handleSubmit}>Send</button>
                </div>
            </form>
        </>
    )
}

export default ImageForm;