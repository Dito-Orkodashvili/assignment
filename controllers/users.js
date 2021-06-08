import { v4 as generateId } from 'uuid'

let users = [
    {
        id: generateId(),
        firstName: 'Albert',
        lastName: 'Einstein',
        age: 4,
        activated: false
    },
    {
        id: generateId(),
        firstName: 'Emmet',
        lastName: 'Brown',
        age: 73,
        activated: true
    },
    {
        id: generateId(),
        firstName: 'Marty',
        lastName: 'McFly',
        age: 16,
        activated: true
    },
]

const getUsers = (req, res) => res.send(users)

const getUserById = (req, res) => {
    const id = req.params.id

    const foundUser = users.find(user => user.id === id)

    if (!foundUser) {
        return res.status(404).json({msg: `The user with the id of ${id} was not found!`})
    }

    res.send(foundUser)
}

const createUser = (req, res) => {
    const {firstName, lastName, age, activated = false } = req.body

    if(!firstName) {
        return res.status(400).json({msg: `firstName is missing from the request!`})
    }

    if(!lastName) {
        return res.status(400).json({msg: `lastName is missing from the request!`})
    }

    if(!age) {
        return res.status(400).json({msg: `age is missing from the request!`})
    }

    users.push({
        id: generateId(),
        firstName,
        lastName,
        age,
        activated
    })

    res.status(200).json({msg: `User with the name ${firstName} was created!`})
}

const updateUser = (req, res) => {
    const user = req.body
    const id = req.params.id

    const foundUserIndex = users.findIndex(user => user.id === id)

    if (foundUserIndex === -1) {
        return res.status(404).json({msg: `The user with the id of ${id} was not found!`})
    }

    const updatedUser = {...users[foundUserIndex], ...user}
    users[foundUserIndex] = updatedUser

    res.send(updatedUser)
}

const deleteUser = (req, res) => {
    const id = req.params.id

    users = users.filter(user => user.id !== id)

    res.status(200).json({msg: `The user with the id of ${id} was deleted!`})
}

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}