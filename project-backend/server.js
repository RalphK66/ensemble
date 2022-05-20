import cors from 'cors'
import 'dotenv/config.js'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import errorHandler from './middleware/errorHandler.js'
import logger from './middleware/logger.js'
import routes from './routes/movie.js'

const app = express()
const PORT = process.env.PORT || 8080

// adding set of security middlewares
app.use(helmet())

// parse incoming request body
app.use(json())
app.use(urlencoded({ extended: true }))

// enable all CORS request
app.use(cors())

// set logger
app.use(logger)

// api routes
app.use('/api', routes)

// test route
app.use('/', (req, res) => res.send('Hello, world!'))

// add error handler middleware as the last middleware
app.use(errorHandler)

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`))
