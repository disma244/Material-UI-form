import UserForm from './components/UserForm'
import { useState } from 'react'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Faq from './components/Faq'

function App() {
	let [data, setData] = useState({
		userName: { val: '', name: 'User Name' },
		password: { val: '', name: 'Password' },
		confirmPassword: { val: '', name: 'Password Confirmation' },
		email: { val: '', name: 'Email' },
		confirmEmail: { val: '', name: 'Email Confirmation' },
		firstName: { val: '', name: 'First Name' },
		lastName: { val: '', name: 'Last Name' },
		city: { val: '', name: 'City' },
		state: { val: 'none', name: 'State' },
		zipcode: { val: '', name: 'Zipcode' },
		occupation: { val: '', name: 'Occupation' },
		experience: { val: '', name: 'Experience' },
		feedback: { val: '', name: 'Feedback' },
		step: 0,
		errorPassword: { val: false, name: 'Password' },
		errorConfirmPassword: { val: false, name: 'Password Confirmation' },
		errorEmail: { val: false, name: 'Email' },
		errorEmailConfirm: { val: false, name: 'Email Confirmation' },
	})

	return (
		<div className='App'>
			<TopBar data={data} setData={setData} />
			<Routes>
				<Route path='/*' element={<UserForm data={data} setData={setData} />} />
				<Route path='/faq' element={<Faq />} />
			</Routes>
		</div>
	)
}

export default App
