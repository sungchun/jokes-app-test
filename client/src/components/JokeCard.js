import { useState } from "react"
import axios from "axios"
import "../styles/jokeCard.css"

const JokeCard = ({ joke, id }) => {
    const [newJoke, setNewJoke] = useState('')
    async function deleteJoke() {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:4000/jokes/${id}`,
            mode: 'cors',
            credentials: 'include'
        })
        window.location.reload()
        return response.data
    }

    function handleChange(event) {
        setNewJoke(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const config = {
            method: 'put',
            url: `http://localhost:4000/jokes/${id}`,
            data: { "joke": `${newJoke}` },
            mode: 'cors',
            credentials: 'include'
        }
        const response = await axios(config)
        window.location.reload()
        return response.data
    }

    return (
        <div className="joke-box">
            <div className="joke-box-one">
                <p className="joke-text">{joke}</p>
                <button onClick={deleteJoke}>Delete</button>
            </div>
            <div className="update-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange}></input>
                    <input type="submit" value="Update Joke"></input>
                </form>
            </div>

        </div>
    )
}

export default JokeCard