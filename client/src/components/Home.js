import JokesList from "./JokesList.js"
import NewJoke from "./NewJoke.js"
import "../styles/home.css"

const Home = () => {
    return (
        <div>
            <h1>Jokes.</h1>
            <NewJoke />
            <JokesList />
        </div>
    )
}
export default Home