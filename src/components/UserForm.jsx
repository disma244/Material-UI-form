import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Overview from './Overview'
import { Routes, Route } from 'react-router-dom'

function UserForm({ data, setData }) {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<FormUserDetails data={data} setData={setData} />}
				/>
				<Route
					path='/PersonalDetails'
					element={<FormPersonalDetails data={data} setData={setData} />}
				/>
				<Route
					path='/Overview'
					element={<Overview data={data} setData={setData} />}
				/>
			</Routes>
			{/* <FormUserDetails data={props.data} /> */}
			{/* <FormPersonalDetails /> */}
			{/* <Overview /> */}
			<Confirm data={data} setData={setData} />
		</>
	)
}
export default UserForm
