import express from 'express'

const app = express()

//implementación de la ruta RAIZ (http://localhost:8080/)
app.get('/', (request, response) => {
    response.send('Hola Mundo!!!')
})

//implementación de la otra ruta (http://localhost:8080/cursos)
app.get('/cursos', (request, response) => {
    response.send('Aquí van los cursos')
})

app.listen(8080, () => console.log('Server Up'))