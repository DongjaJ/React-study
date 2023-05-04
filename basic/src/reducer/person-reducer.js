export default function personReducer(person, action) {
	switch (action.type) {
		case 'updated':
			const { prev, current } = action;
			return {
				...person,
				mentors: person.mentors.map((mentor) =>
					mentor.name === prev ? { ...mentor, name: current } : mentor
				),
			};

		case 'added':
			const { name, title } = action;
			return {
				...person,
				mentors: [...person.mentors, { name, title }],
			};

		case 'deleted':
			return {
				...person,
				mentors: person.mentors.filter(
					(mentor) => mentor.name !== action.name
				),
			};
		default:
			throw Error(`알수 없는 action type:${action.type}`);
	}
}
