import axios from 'axios';
import React from 'react'

const Update = () => {

    const handleUpdate = async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const data = {name,age};
        axios.put(`https://fsd-backend-sem-vi-ds-a-i2m9.onrender.com/users/${id}`,data);
        alert("success")
    }
  return (
    <div>
        <h1>Update User</h1>
        <form action="" onSubmit={handleUpdate}>
            <input type="text" placeholder='Enter product id' name="id"/>
            <input type="text" placeholder='Enter name' name="name"/>
            <input type="text" placeholder='Enter age' name="age"/>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update