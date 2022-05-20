import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const alreadyExists = async (title) => {
  const movie = await prisma.movie.findFirst({ where: { title } })
  return !!movie
}

export const createMovie = async ({ title, description, release, duration }) => {
  const movie = await prisma.movie.create({
    data: { title, description, release, duration },
  })
  return movie
}

export const getMovies = async () => {
  const movies = await prisma.movie.findMany()
  return movies
}

export const getMovie = async (id) => {
  const movie = await prisma.movie.findUnique({ where: { id } })
  return movie
}

export const getMovieByTitle = async (title) => {
  const movie = await prisma.movie.findFirst({ where: { title } })
  return movie
}

export const deleteMovie = async (id) => {
  const movie = await prisma.movie.delete({ where: { id } })
  return movie
}

export const updateMovie = async (id, data) => {
 
  const updates = { ...data }
  const movie = await prisma.movie.update({
    where: { id },
    data: { ...updates },
  })
  return movie
}

export const dislikeMovie = async (id) => {
  const movie = await prisma.movie.update({
    where: { id },
    data: { dislikes: { increment: 1 } },
  })
  return movie
}

export const likeMovie = async (id) => {
  const movie = await prisma.movie.update({
    where: { id },
    data: { likes: { increment: 1 } },
  })
  return movie
}
