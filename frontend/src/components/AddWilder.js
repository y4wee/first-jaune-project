import React, { useState } from "react";
import axios from "axios";
import styles from "./AddWilder.module.css";

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
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.input}>
                    <label>Name </label>
                    <input type="text" value={name} onChange={changeHandler} />
                </div>
                <button>ADD</button>
            </form>
        </div>
    );
};

export default AddWilder;
