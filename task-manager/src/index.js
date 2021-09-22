const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user')

const app = new express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)


// app.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch(e) {
//         res.status(400).send(e)
//     }
// })

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch(e) {
//         res.status(500).send()
//     }
// })

// app.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }

// })

// app.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isVaidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if(!isVaidOperation) {
//         return res.status(400).send({ 'error': 'Invalid updates!' })
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = User.findByIdAndDelete(req.params.id)

//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }
// })

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks => {
        res.send(tasks)
    }).catch(e => {
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then(task => {
        if(!tasks) {
            return res.status(404).send()
        }

        res.send(tasks)
    }).catch(e => {
        res.status(500).send()
    })
})

const bcrypt = require('bcryptjs')

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const myFunction = async () => {
    const password = '1233123'
    const hashPassword = await bcrypt.hash(password, 8)

    console.log(hashPassword)

    const isMatch = await bcrypt.compare(password, hashPassword)
    console.log(isMatch)
}

myFunction()
