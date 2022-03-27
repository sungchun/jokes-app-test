import express from "express"
import { getAllJokes, addJoke, updateJoke, deleteJoke } from "../controllers/jokes.js"

const router = express.Router()

router.route('/jokes')
    .get(getAllJokes)
    .post(addJoke)

router.route('/jokes/:id')
    .put(updateJoke)
    .delete(deleteJoke)

export default router