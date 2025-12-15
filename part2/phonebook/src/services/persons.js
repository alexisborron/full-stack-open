import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

/* const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        name: 'Bob',
        number: '111-111-1111',
    }
    return request.then(response => response.data.concat(nonExisting))
} */

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    update,
    remove
}