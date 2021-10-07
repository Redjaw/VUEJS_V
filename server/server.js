// requires
const { uuid } = require('uuidv4')
const fastify = require('fastify')({ logger: true })
const fastifyEnv = require('fastify-env')
const fs = require('fs');

// Utility methods
function writeDb() {
    var db = require('./db-mock.json')
	return new Promise(resolve => {
		let data = JSON.stringify(db, null, 2)
		fs.writeFile('./db-mock.json', data, (err) => {
			console.log(err)
			if (err) throw err;
			resolve('ok')
		});
  });
}

// Routes
fastify.get('/api/matches:id', async (request, reply) => {
    var db = require('./db-mock.json')
    console.log(db.matches)
    if(request.query.id) return db.matches.filter(item=>item.id===request.query.id)
  return db.matches
})

fastify.get('/api/players:id', async (request, reply) => {
    var db = require('./db-mock.json')
    if(request.query.id) return db.players.filter(item=>item.id===request.query.id)
    return db.players
})

fastify.post('/api/matches', async (request, reply) => {
    var db = require('./db-mock.json')
    let reqBody = request.body
    reqBody.id = uuid()
	db.matches.push(reqBody)
	writeDb().then((response)=> reply.code(201).send())
})

fastify.put('/api/matches:id', async (request, reply) => {
    var db = require('./db-mock.json')
    if (request.query.id) {
        for (var k in db.matches) {
            if (db.matches[k].id === request.query.id) {
                let reqBody = request.body
                db.matches.splice(k, 1)
                db.matches.push(reqBody)
                writeDb().then((response)=> reply.code(201).send())
            }
        }
    }else reply.code(500).send('nessuna partita selezionata')
})

fastify.get('/api/share', async (request, reply) => {
	reply.code(500).send('La funzionalità non è ancora stata implementata!')
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