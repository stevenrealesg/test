import { useEffect, useState } from 'react';
import servicePerson from '../services/person'

function Crud() {

    const [people, setPeople] = useState([])
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [updating, setUpdating] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        servicePerson.getAll().then(data => {
            setPeople(data.data)
        })
    }, [])

    const handleChangeName = ({ target }) => setName(target.value)
    const handleChangeLastName = ({ target }) => setLastName(target.value)
    const handleChangeEmail = ({ target }) => setEmail(target.value)
    const handleChangePhone = ({ target }) => setPhone(target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!updating) {
            servicePerson.save({ name, lastName, email, phone }).then(result => {
                setPeople(prev => [...prev, result.data.person])
                resetForm()
                setMessage(result.data.message)
            })
        } else {
            servicePerson.update(updating, { name, lastName, email, phone }).then(result => {
                setPeople(prev => prev.map(person => person.id === result.data.person.id ? result.data.person : person))
                resetForm()
                setMessage(result.data.message)
            })
        }

    }

    const handleDelete = (id) => {
        servicePerson.remove(id).then(result => {
            setPeople(prev => prev.filter(person => person.id !== id))
            setMessage(result.data.message)
        })
    }

    const dataUpdate = (person) => {
        setUpdating(person.id)
        setName(person.name)
        setLastName(person.lastName)
        setEmail(person.email)
        setPhone(person.phone)
    }

    const resetForm = () => {
        setName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setUpdating(null)
        setMessage('')
    }

    return (
        <div>
            <h1>CRUD</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" value={name} onChange={handleChangeName} required />
                </div>
                <div>
                    <label>Apellido: </label>
                    <input type="text" value={lastName} onChange={handleChangeLastName} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={handleChangeEmail} required />
                </div>
                <div>
                    <label>Teléfono: </label>
                    <input type="text" value={phone} onChange={handleChangePhone} required />
                </div>
                <div>
                    <button type="submit">{updating ? "Editar" : "Guardar"}</button>
                    <button type="button" onClick={() => resetForm()}>Cancelar</button>
                </div>
                <h4><em>{message}</em></h4>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {people && people.map((person, index) =>
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                            <td>
                                <button onClick={() => handleDelete(person.id)}>Eliminar</button>
                                <button onClick={() => dataUpdate(person)}>Editar</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Crud;