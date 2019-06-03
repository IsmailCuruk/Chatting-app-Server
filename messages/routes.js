const { Router } = require('express')
const Message = require('./model')
const User = require('../users/model')
const colors = require('colors')


const router = new Router()

function dispatchMessages() {
  const messages = Message.findAll()
  const action = {
    type: 'MESSAGES',
    payload: messages
  }
  io.emit('action', action)
}

router.post('/message', (req, res, next) => {
  console.log('message test (i.e. the body):'.blue, req.body);
  Message
    .create(req.body)
    .then(body => {
      if (!body.text) {
        return res.status(401).end()
      }
      dispatchMessages()
      return res.status(201).send(body)
    })
    .catch(error => next(error))
})



module.exports = router