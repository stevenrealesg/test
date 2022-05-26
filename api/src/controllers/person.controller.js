const fs = require('fs');
const { v4: uuid } = require('uuid');
const stringData = fs.readFileSync('people.json', 'utf-8');
let people = JSON.parse(stringData);

const getAll = (req, res) => {
    res.status(200).json({ status: 'OK', data: people })
}

const add = async (req, res) => {
    try {
        const { name, lastName, email, phone } = req.body;
        const newPerson = { id: uuid(), name, lastName, email, phone }
        people.push(newPerson);
        fs.writeFileSync('people.json', JSON.stringify(people));
        res.status(200).json({ status: 'OK', message: `Se ha guardado a ${name} ${lastName} correctamente.`, person: newPerson })
    } catch (error) {
        res.status(500).json({ status: 'ERROR', message: "Error al guardar persona." })
    }
}
const update = (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName, email, phone } = req.body;
        const personUpdated = { id, name, lastName, email, phone }
        console.log(personUpdated);
        people = people.map(person => person.id === id ? personUpdated : person)
        fs.writeFileSync('people.json', JSON.stringify(people));
        res.status(200).json({ status: 'OK', message: `Se ha actualizado a ${name} ${lastName} correctamente.`, person: personUpdated })
    } catch (error) {
        res.status(500).json({ status: 'ERROR', message: "Error al actualizar persona." })
    }
}

const remove = (req, res) => {
    try {
        const { id } = req.params;
        const personDeleted = people.find(person => person.id === id);
        people = people.filter(person => person.id !== id);
        fs.writeFileSync('people.json', JSON.stringify(people));
        res.status(200).json({ status: 'OK', message: `Se ha eliminado a ${personDeleted.name} ${personDeleted.lastName} correctamente.`, person: personDeleted })
    } catch (error) {
        res.status(500).json({ status: 'ERROR', message: "Error al eliminar persona." })
    }
}

module.exports = { getAll, add, update, remove }