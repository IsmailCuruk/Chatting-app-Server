const express = require('express')
const socketIo = require('socket.io')
const cors = require('cors')
const bodyParser = require('body-parser')
const messagesRouter = require('./messages/routes');
const colors = require('colors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(messagesRouter)

function dispatchMessages () {
  const action = {
    type: 'MESSAGES',
    payload: messages
  }
  io.emit('action', action)
}

app.post('/message', (request, response) => {
  const { message } = request.body
  // const message = request.body.message

  console.log('message test:'.yellow, message)

  messages.push(message)

  dispatchMessages()

  response.status(201).send(message)
})

function onListen () {
  console.log('Listening on port 4000'.green)
}

const server = app.listen(4000, onListen)

global.io = socketIo.listen(server)

const messages = ['goodbye']

io.on(
  'connection',
  client => {
    console.log('client.id test:'.yellow, client.id)

    dispatchMessages()

    client.on(
      'disconnect',
      () => console.log('disconnect test:'.yellow, client.id)
    )
  }
)
