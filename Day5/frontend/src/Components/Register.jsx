import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister = async (e) => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.post('https://fsd-backend-sem-vi-ds-a-i2m9.onrender.com/users', user)
        alert('User Registered Successfully')

    }
    return (
        <div>
            <form onSubmit={handleregister}>
                <label>Name:</label> <input type='text' name='name' />
                <label>Age:</label> <input type='text' name='age' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
export default Register