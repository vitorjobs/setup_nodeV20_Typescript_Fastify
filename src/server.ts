import 'dotenv/config'
import fastify from 'fastify'
import { env } from './env'

console.log(process.env)
const app = fastify()
// const port = Number(env.SERVER_PORT)

app.get('/hello', () => {
  return 'Hello Word'
})

app.post('/autentication', async (request, reply) => {
  try {
    const dataAutentication = {
      username: env.USUARIO_VEEAM_ONE,
      password: env.PASSWORD_VEEAM_ONE,
      grant_type: env.TYPE_ACESSO_VEEAM_ONE,
      refresh_token: '',
    }

    const api_response = await axios
  } catch (error) {}
})

// // Rota para realizar a requisição à API externa
// fastify.get('/fetch-data', async (request, reply) => {
//   const options = {
//     method: 'GET',
//     url: 'https://localhost/autentication',
//     headers: {
//       // Aqui você adiciona as credenciais, por exemplo:
//       'Authorization': 'Basic ' + Buffer.from('diretor:senha_do_diretor').toString('base64'),
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     reply.send(response.data);
//   } catch (error) {
//     console.error(error);
//     reply.code(500).send({ error: 'Falha ao buscar dados' });
//   }
// });

app
  .listen({
    port: process.env.SERVER_PORT || undefined,
    // port:env.SERVER_PORT || undefined,
    // port: 4222,
  })
  .then(() => {
    console.log(`HTTP Server Runing ${process.env.SERVER_PORT}`)
  })
