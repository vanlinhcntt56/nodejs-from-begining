require('./src/db/mongoose')
const Task = require('./src/models/task')

Task.findByIdAndDelete('614a967e496be5554bd55f68').then(task => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})