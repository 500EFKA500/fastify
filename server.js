import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import routes from './routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fastify = Fastify({
  logger: true
})

await fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/'
})

await routes(fastify)

await fastify.listen({ port: 3000 , host: "0.0.0.0"}, (err, address) => {
  if (err) throw err
})
