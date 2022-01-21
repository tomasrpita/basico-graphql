'use strict'

const courses = [
	{
		_id: 'aniID',
		title: 'Mi titulo',
		teacher: 'Tomás R. Pita',
		description: 'Descripción del curso',
		topic: 'Programación Cuantica',
	},
	{
		_id: 'aniID',
		title: 'Mi titulo 2',
		teacher: 'Tomás R. Pita',
		description: 'Descripción del curso',
		topic: 'Programación Cuantica',
	},
	{
		_id: 'aniID',
		title: 'Mi titulo 3',
		teacher: 'Tomás R. Pita',
		description: 'Descripción del curso',
		topic: 'Programación Cuantica',
	}
]

module.exports ={
	Query: {
		getCourses : () => {
			return courses
	}
	}
  }


