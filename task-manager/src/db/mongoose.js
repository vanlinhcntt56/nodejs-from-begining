const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1/task-manager-api', {
    useNewUrlParser: true   
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if(value.includes("password")) {
//                 throw new Error("password cannot contains 'password'")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'minh',
//     email: 'GG@gmail.com',
//     password: '3dfdf34'
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch(error => {
//     console.log(error)
// })