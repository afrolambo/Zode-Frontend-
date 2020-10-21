import React from 'react'

const EditForm = (changeHandler, submitHandler, bio) => {

    const handleChange = (e) => {
        changeHandler(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Edit Bio
                <br/>
                <textarea name="bio" value={bio} onChange={handleChange} type="textBox" placeholder="tell us about yourself" />
            </label>
            <input type="submit" />
        </form>
    )
}

export default EditForm