'use strict'

const { MongoClient } = require('mongodb')

const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
let connection

async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = new MongoClient(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
		  })
		  await client.connect()
		  connection = client.db()
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    // si no nos logramos conectar cerramos el proceso
    process.exit(1)
  }
  return connection
}

module.exports = connectDB
