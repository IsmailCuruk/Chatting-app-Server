const Sequelize = require('sequelize')
const sequelize = require('../db')


const User = sequelize.define('users', {
  userName: {
    type: Sequelize.STRING,
    field: 'user_name',
    allowNull: false
  },
  online: {
    type: Sequelize.BOOLEAN
  }
}, {
    timestamps: false,
    tableName: 'users',
    underscored: true
  })


module.exports = User