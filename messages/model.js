const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')

const Message = sequelize.define('messages', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
    tableName: 'messages',
    underscored: true,
})

User.belongsTo(Message)

module.exports = Message