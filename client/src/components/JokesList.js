import { useState, useEffect } from "react"
import axios from 'axios'
import JokeCard from "./JokeCard.js"
import "../styles/jokesList.css"


const JokesList = () => {
    const [listOfJokes, setListOfJokes] = useState([])

    useEffect(async () => {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/jokes/',
            mode: 'cors',
            credentials: 'include'
        })
        console.log(response.data)
        setListOfJokes(response.data)
    }, [])

    return (
        <>
            <ul>
                {listOfJokes.map((joke) => (
                    <li key={joke._id}>
                        <JokeCard joke={joke.joke} id={joke._id} />
                    </li>
                ))
                }
            </ul>
        </>
    )
}
export default JokesList