import axios from 'axios'

export default async function uniqueEmail (value:string)  {
	if(value === '') return true
	const res = await axios.get('http://localhost:3000/emailRegistrations')
	const registrations = res.data
	const alreadyDoneRegistration = registrations.indexOf(registration => {
		if(registration.email === alreadyDoneRegistration) return false
		return true
	}


		// {if(registration.email === alreadyDoneRegistration) return false
		// 	return true}
		)
		//  === alreadyDoneRegistration ? -1 : true )

	// const alreadyDoneRegistration = registarations.find((registaration) => {
	// 	if(registaration.email === alreadyDoneRegistration) return false
	// 	return true
	// if(!users.find(user => user.username === users)) {
	// 	users.push(newUser)
	// } else {
	// 	throw new Error('Пользователь уже существует')
	// }

	// const alreadyDoneRegistration = registarations
	// .find(el =>el === alreadyDoneRegistration)
}


