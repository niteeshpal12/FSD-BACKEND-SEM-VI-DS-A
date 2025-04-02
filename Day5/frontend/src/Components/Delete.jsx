import axios from 'axios';
import React from 'react'

const Delete = () => {

    const handleDelete = async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        await axios.delete(`https://fsd-backend-sem-vi-ds-a-i2m9.onrender.com/users/${id}`)
        alert('product deleted successfully')
    }
  return (
    <div>
        <form action="" onSubmit={handleDelete}>
            <input type="text" placeholder='Enter product id' name="id"/>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default Delete