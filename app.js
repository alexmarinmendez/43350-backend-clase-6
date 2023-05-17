import express from 'express'

const cursos = [
    { id: 1, name: 'Backend', teacher: 'Alex', price: 1300 },
    { id: 2, name: 'ReactJs', teacher: 'Alex', price: 3000 },
    { id: 3, name: 'AngularJS', teacher: 'Alex', price: 800 },
    { id: 4, name: 'NestJs', teacher: 'Alex', price: 1000 },
]

const user = {
    name: 'Shakira',
    title: 'Title 1'
}

const app = express()

//implementación de la ruta RAIZ (http://localhost:8080/)
app.get('/', (request, response) => {
    //html onwire! (vistas)
    response.send('<h1>Hola Mundo!!!</h1><hr><div style="background-color: red">Soy un div</div>')
})

//implementación de la otra ruta (http://localhost:8080/cursos)
app.get('/cursos', (request, response) => {
    response.send({cursos}) //data onwire!
})

app.get('/cursos/:id', (request, response) => {
    const id = request.params.id
    const curso = cursos.find(item => item.id == id)
    if (!curso) return response.send({ error: 'El curso no existe' })
    response.send(curso)
})

app.get('/user', (request, response) => {
    response.send({ user })
})

app.listen(8080, () => console.log('Server Up'))