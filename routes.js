export default async function routes(fastify) {
    fastify.post('/api/text', async (request, reply) => {
        const {text} = request.body;
        const result = text
        return {succes: true, message: result}
    })
}
