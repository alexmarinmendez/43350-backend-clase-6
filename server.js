import http from 'http'    //ESModules

const server = http.createServer((request, response) => {
    console.log('Alguien me hizo una petición...')
    response.end('Solicitud recibida.... Toma tu respuesta!')
})

const connectedServer = server.listen(8080, () => {
    console.log('Server Up...')
})