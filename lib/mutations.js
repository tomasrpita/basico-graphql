'use strict'

const connectDB = require("./db")



module.exports = {
		createCourse: async (root, {input}) => {
			// No requeried fields
			const defaults = {
				teacher: '',
				topic: '',
			}
			console.log(input)
			const newCourse = Object.assign(defaults, input)

			let db, course

			try {
				db = await connectDB()
				course = await db.collection('courses').insertOne(newCourse)
				newCourse._id = course.insertedId
			} catch (error) {
				console.error(error)
			}
			return newCourse

		}
}
