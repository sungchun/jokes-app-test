import mongoose from "mongoose"

const jokeSchema = new mongoose.Schema(
    {
        joke: { type: String, required: true }
    }
)

export default mongoose.model("Joke", jokeSchema)