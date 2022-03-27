import { useState } from "react"
import axios from "axios"
import "../styles/newJoke.css"

const NewJoke = () => {
    const [newJoke, setNewJoke] = useState('')

    function handleChange(event) {
        setNewJoke(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const config = {
            method: 'post',
            url: `http://localhost:4000/jokes/`,
            data: { "joke": `${newJoke}` },
            mode: 'cors',
            credentials: 'include'
        }
        const response = await axios(config)
        window.location.reload()
        return response.data
    }
    return (
        <form onSubmit={handleSubmit} className="new-joke-form">
            <label>Add a new joke here:</label>
            <input type="text" onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    )
}

export default NewJoke