const { Router } = require('express')
const Message = require('./model')
const User = require('../users/model')
const colors = require('colors')


// router.post('/message', (req, res, next) => {
//   const { message } = req.body;
//   console.log('message test:'.blue, message);
//   User
//     .create(message, { include: [User] })
//     .then(message => {
//       if (!message) {
//         return res.status(404).end()
//       }
//       messages.push(message)
//       dispatchMessages()
//       return res.status(201).send(message)
//     })
//     .catch(error => next(error))
// })
