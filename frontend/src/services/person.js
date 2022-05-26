import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API || 'http://localhost:3001'

const getAll = async () => {
    try {
        const { data } = await axios.get(`${URL_API}/person`)
        return data
    } catch (error) {
        console.log(error)
        return {status: "Error", message: "Error al obtener personas" }
    }
}

const save = async (data) => {
    try {
        return await axios.post(`${URL_API}/person/add`, data)
    } catch (error) {
        console.log(error)
        return {status: "Error", message: "Error al guardar persona" }
    }
}

const remove = async (id) => {
    try {
        return await axios.delete(`${URL_API}/person/delete/${id}`)
    } catch (error) {
        console.log(error)
        return {status: "Error", message: "Error al eliminar persona" }
    }
}

const update = async (id, data) => {
    try {
        return await axios.put(`${URL_API}/person/update/${id}`, data)
    } catch (error) {
        console.log(error)
        return {status: "Error", message: "Error al actualizar persona" }
    }
}

const exportedObject = { getAll, save, remove, update }
export default exportedObject