import { Router } from 'express'
import { isEmpty } from 'lodash-es'
import {
  alreadyExists,
  createMovie,
  deleteMovie,
  dislikeMovie,
  getMovie,
  getMovieByTitle,
  getMovies,
  likeMovie,
  updateMovie,
} from '../controllers/movie.js'
import { FIELDS } from '../prisma/util.js'

const router = Router()

// create movie
router.post('/movie', async (req, res) => {
  const { title, description, release, duration } = req.body
  try {
    if (await alreadyExists(title)) {
      res.status(200).send({ success: false, message: `${title} is already in the database.` })
    }
    const movie = await createMovie({
      title,
      description,
      release: +release,
      duration,
    })
    res.status(200).send({ success: true, movie })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// get all movies
router.get('/movies', async (req, res) => {
  try {
    const movies = await getMovies()
    res.status(200).send({ success: true, movies })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// get movie
router.get('/movie/:id', async (req, res) => {
  const { id } = req.params
  try {
    const movie = await getMovie(+id)
    const message = movie ? 'OK' : `Movie with id: ${id} does not exist.`
    const success = !!movie
    res.status(200).send({ success, movie, message })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// get movie by title
router.post('/movie/title', async (req, res) => {
  const { title } = req.body
  try {
    const movie = await getMovieByTitle(title)
    const message = movie ? 'OK' : `${title} does not exist.`
    const success = !!movie
    res.status(200).send({ success, movie, message })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// delete movie
router.delete('/movie/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await deleteMovie(+id)
    res.status(200).send({ success: true, deleted })
  } catch (error) {
    // movie does not exist in database
    if (error.code === 'P2025') {
      res.status(200).send({ success: true, message: `Movie with id: ${id} does not exist.` })
    }
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// update movie
router.put('/movie/:id', async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    // if there are no arguments throw error
    if (isEmpty(data)) throw 'No arguments were passed'

    // check if the data object only has any invalid fields
    const invalidFields = Object.keys(data).filter((field) => !FIELDS.includes(field))
    // if any of the fields are invalid throw error
    if (!isEmpty(invalidFields)) throw `Invalid Fields: [ ${invalidFields.join(', ')} ]`

    const updated = await updateMovie(+id, data)
    res.status(200).send({ success: true, updated })
  } catch (error) {
    // movie does not exist in database
    if (error.code === 'P2025') {
      res.status(200).send({ success: false, message: `Movie with id: ${id} does not exist.` })
    }
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// like movie
router.patch('/movie/like/:id', async (req, res) => {
  const { id } = req.params
  try {
    const updated = await likeMovie(+id)
    res.status(200).send({ success: true, updated })
  } catch (error) {
    // movie does not exist in database
    if (error.code === 'P2025') {
      res.status(200).send({ success: false, message: `Movie with id: ${id} does not exist.` })
    }
    res.status(500).send({ success: false, message: error.message, error })
  }
})

// like movie
router.patch('/movie/dislike/:id', async (req, res) => {
  const { id } = req.params
  try {
    const updated = await dislikeMovie(+id)
    res.status(200).send({ success: true, updated })
  } catch (error) {
    // movie does not exist in database
    if (error.code === 'P2025') {
      res.status(200).send({ success: false, message: `Movie with id: ${id} does not exist.` })
    }
    res.status(500).send({ success: false, message: error.message, error })
  }
})

export default router
