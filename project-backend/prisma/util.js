import { Prisma } from '@prisma/client'

// get the model fields from the database
const fieldsObj = (({ id, createdAt, ...rest }) => rest)(Prisma.MovieScalarFieldEnum)

export const FIELDS = Object.keys(fieldsObj)
