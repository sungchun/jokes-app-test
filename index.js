import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'
import cors from 'cors'

const app = express()

const startServer = async () => {
  try {
    // * connect to mongo
    await mongoose.connect(dbURI)
    console.log('🚀 Database has connected successfully')

    app.use(express.json())
    app.use(cors())

    app.use((req, _res, next) => {
      console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
      next()
    })

    app.use(router)

    app.use((req, res) => {
      console.log('failed request')
      res.status(404).json({ message: 'route not found foo' })
    })
    // * listen for incoming requests on port 4000
    app.listen(port, () => console.log(`🚀 Up and running on port ${port}`))
  } catch (err) {
    console.log('🆘 Something has gone wrong starting the app')
    console.log(err)
  }
}
startServer()

