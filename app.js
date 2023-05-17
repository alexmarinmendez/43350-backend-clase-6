import express from 'express'

const app = express()

//implementación de la ruta RAIZ (http://localhost:8080/)
app.get('/', (request, response) => {
    response.send('<h1>Hola Mundo!!!</h1><hr><div style="background-color: red">Soy un div</div>')
})

//implementación de la otra ruta (http://localhost:8080/cursos)
app.get('/cursos', (request, response) => {
    response.send({cursos: ['Backend', 'ReactJs', 'AngularJs', 'NestJs']})
})

app.listen(8080, () => console.log('Server Up'))