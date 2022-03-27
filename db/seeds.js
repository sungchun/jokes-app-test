import mongoose from "mongoose"
import { dbURI } from "../../jokes-app-test/config/environment.js"
import Joke from '../../jokes-app-test/models/jokeModel.js'
import fs from 'fs'
import parse from 'csv-parse'

const jokesArray = []


fs.readFile('jokes.csv', (err, data) => {
    parse(data, {}, (err, jokes) => {
        jokes.forEach((quip) => {
            jokesArray.push({ joke: quip[0] })
        })
        console.log('read the jokes')
    });
});

const seedDatabase = async () => {
    try {
        await mongoose.connect(dbURI)
        console.log('DB connected')

        await mongoose.connection.db.dropDatabase()
        console.log('DB dropped')

        const jokes = await Joke.create(jokesArray)

        console.log(`DB seeded with ${jokes.length} jokes.`)

        await mongoose.connection.close()
    } catch (err) {
        console.log('Something went wrong')
        console.log(err)
        await mongoose.connection.close()
    }
}

seedDatabase()