'user strict'

// Carga el archivo de configuración .env en process.env
require('dotenv').config()

// ahora sera grambiado por graphql-tools
// const { buildSchema } = require('graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const cors = require('cors')

const app = express()
const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production'

// definiendo el esquema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use(cors())

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
