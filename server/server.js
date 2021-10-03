// requires
var db = require('./db-mock.json')
const fastify = require('fastify')({ logger: true })
const fastifyEnv = require('fastify-env')

// Routes
fastify.get('/api/gameslist', async (request, reply) => {
  return db.games
})

fastify.get('/api/game:name', async (request, reply) => {
    return db.games.filter((item)=> item.id === request.query.name)
})

// Server startup
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()