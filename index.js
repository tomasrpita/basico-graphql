'user strict';


const {graphql, buildSchema} = require('graphql');

// definiendo el esquema
const schema = buildSchema(`
	type Query {
		hello: String
	}
`)

// Configurar los resolvers
const resolvers = {
	hello: () => {
		return 'Hola Mundo'
	},
	saludo: () => {
		return 'Hola a Todos'
	}
}

// Ejecutar el query hello
graphql(schema, '{ hello }', resolvers).then(data => console.log(data));
