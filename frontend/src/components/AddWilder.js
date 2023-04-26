import React, { useState } from "react";
import axios from "axios";

const AddWilder = () => {
    const [name, setName] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        if (name.length > 0) {
            await axios.post("http://localhost:4000/api/wilder", {
                name: name,
            });
            setName("");
        }
    };
    const changeHandler = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type="text" value={name} onChange={changeHandler} />
                <button>ADD</button>
            </form>
        </div>
    );
};

export default AddWilder;
