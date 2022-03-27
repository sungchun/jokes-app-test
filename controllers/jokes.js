import Joke from "../models/jokeModel.js"

export const getAllJokes = async (_req, res) => {
    const jokes = await Joke.find()
    return res.status(200).json(jokes)
}

export const addJoke = async (req, res) => {
    try {
        const addedJoke = await Joke.create(req.body)
        return res.status(201).json(addedJoke)
    } catch (err) {
        return res.status(422).json(err)
    }
}

export const deleteJoke = async (req, res) => {
    const { id } = req.params
    try {
        const jokeToDelete = await Joke.findById(id)
        if (!jokeToDelete) throw new Error()
        await jokeToDelete.remove()
        return res.sendStatus(204)
    } catch (err) {
        return res.status(404).json({ message: 'joke not found' })
    }
}

export const updateJoke = async (req, res) => {
    const { id } = req.params
    try {
        const jokeToUpdate = await Joke.findById(id)
        Object.assign(jokeToUpdate, req.body)
        jokeToUpdate.save()
        return res.status(202).json(jokeToUpdate)
    } catch (err) {
        res.status(404).json({ message: 'joke not found' })
    }
}