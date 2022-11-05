import axios from 'axios'

export default async function uniqueEmail (value:string)  {
	if(value === '') return true
	const res = await axios.get('http://localhost:3000/emailRegistrations')
	const registarations = res.data
	const alreadyDoneRegistration = registarations.indexOf(registaration => registaration.email === alreadyDoneRegistration ? -1 : true )


	// const alreadyDoneRegistration = registarations
	// .find(el =>el === alreadyDoneRegistration)
}

