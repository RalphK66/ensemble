import { DateTime } from 'luxon'

const logger = (req, res, next) => {
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  const dt = DateTime.now()

  console.log(`${url} => ${dt}`)

  next()
}

export default logger
