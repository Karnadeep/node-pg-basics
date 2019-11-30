const Sequelize = require('sequelize')
const config = require('config')
const db = config.get('pgURI')
module.exports =  new Sequelize(db);