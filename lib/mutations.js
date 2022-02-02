'use strict'

const connectDB = require("./db")
const { ObjectId } = require('mongodb')



module.exports = {
		createCourse: async (root, {input}) => {
			// No requeried fields
			const defaults = {
				teacher: '',
				topic: '',
			}
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

		},
		editCourse: async (root, {_id, input}) => {
			let db, course

			try {
				db = await connectDB()
				await db.collection('courses').updateOne(
					{_id: ObjectId(_id)},
					{$set: input})
				course = await db.collection('courses').findOne({_id: ObjectId(_id)})
			} catch (error) {
				console.error(error)
			}
			return course
		},
		deleteCourse: async (root, { _id }) => {
			let db, info;
			try {
			  db = await connectDB();
			  info = await db.collection('courses').deleteOne({
				_id: ObjectId(_id)
			  });
			} catch (error) {
			  console.error(error);
			}
			console.log(info)
			return info.deletedCount
			  ? `El curso con id ${_id} fue eliminado exitosamente.`
			  : 'No existe el curso con el id indicado';
		},

		createStudent: async (root, {input}) => {
			let db, student

			try {
				db = await connectDB()
				student = await db.collection('students').insertOne(input)
				input._id = student.insertedId
			} catch (error) {
				console.error(error)
			}
			return input
		},
		editStudent: async (root, {_id, input}) => {
			let db, student

			try {
				db = await connectDB()
				await db.collection('students').updateOne(
					{_id: ObjectId(_id)},
					{$set: input})
				student = await db.collection('students').findOne({_id: ObjectId(_id)})
			} catch (error) {
				console.error(error)
			}
			return student
		},
		deleteStudent: async (root, { _id }) => {
			let db, info;
			try {
			  db = await connectDB();
			  info = await db.collection('students').deleteOne({
				_id: ObjectId(_id)
			  });
			} catch (error) {
			  console.error(error);
			}
			console.log(info)
			return info.deletedCount
			  ? `El estudiante con id ${_id} fue eliminado exitosamente.`
			  : 'No existe el estudiante con el id indicado';
		},

}
