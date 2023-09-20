import React, { useState } from "react";

const Task = () => {

    const [inputField, setInputField] = useState([{ firstName: "" }]);

    const [data, setData] = useState([]);



    const handleInputChange = (e, index) => {
        const { name, value } = e.target

        const list = [...inputField]
        list[index][name] = value;
        setInputField(list);
    }

    const handleAddClick = () => {
        setInputField([...inputField, { firstName: "",fieldType:"text" }]);
    }

    const handleRemoveClick = (index) => {
        const removeItem = [...inputField];
        removeItem.splice(index, 1);
        setInputField(removeItem);
    }

    const handleAddData = () => {
        setData(inputField);
    }

    
    const handleSelect = (index,e) => {
        const updatedField = [...inputField];
        updatedField[index].fieldType = e.target.value === 'number' ? 'number' :'text';

        setInputField(updatedField);

    }

    console.log(inputField);


    return (
        <>
            {
                inputField && inputField.map((x, i) => {
                    return (
                        <>
                            <div className="main text-center m-4 ">
                                <select name="" id="" style={{ height: "35px" }} onChange={(e) => handleSelect(i,e)}>
                                    <option >Choose</option>
                                    <option value="number">Number</option>
                                    <option value="text">Text</option>
                                </select>
                                <input
                                    style={{ width: "300px", height: "35px" }}

                                    type={x.fieldType}
                                    name="firstName"
                                    value={x.firstName}
                                    onChange={(e) => handleInputChange(e, i)}
                                />
                                {inputField.length !== i && <button className="btn btn-success ms-2" onClick={handleAddClick}>Add</button>}
                                {inputField.length !== 1 && <button className="btn btn-danger mx-2" onClick={() => handleRemoveClick(i)}>Remove</button>}

                            </div>

                        </>
                    )
                })
            }

            <div className="text-center mt-4">
                <button className="btn btn-primary " style={{ width: "300px" }} onClick={handleAddData}>Send</button>
            </div>

            <div className="text-center mt-5">
                <span>{JSON.stringify(data)}</span>
            </div>
        </>
    )
}

export default Task;