const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]
// Exercise 3.1
app.get('/api/persons', (request, response) => {
    response.json(persons)
})
// Exercise 3.2
app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`
        <div>
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${date}</p>
        </div>`)
})
// Exercise 3.3
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})
// Exercise 3.4
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})
// Exercise 3.5
app.post('/api/persons', (request, response) => {
    const randomId = Math.floor(Math.random() * 1_000_000_000)
    const body = request.body

    // Exercise 3.6
    if (!body.name || !body.number) {
        response.status(400).json({ error: 'The name or number is missing.' })
    }

    const nameExists = persons.some(p => p.name == body.name)
    if (nameExists) {
        response.status(400).json({ error: 'Name must be unique.' })
    }

    const person = {
        id: randomId.toString(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})