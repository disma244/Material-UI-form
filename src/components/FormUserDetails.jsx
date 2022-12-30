import { TextField } from '@mui/material'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import { Box } from '@mui/material'
import { useEffect } from 'react'

function FormUserDetails({ data, setData }) {
	useEffect(() => {
		if (JSON.parse(localStorage.getItem('info')) === undefined) {
			return
		} else if (JSON.parse(localStorage.getItem('info')) !== undefined) {
			console.log(JSON.parse(localStorage.getItem('info')))
			let info = JSON.parse(localStorage.getItem('info'))
			setData({
				...info,
			})
		}
		// eslint-disable-next-line
	}, [])

	let emailRegx = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/

	let handleError = (e) => {
		if (emailRegx.test(e.target.value) === true) {
			setData({
				...data,
				email: { ...data['email'], val: e.target.value },
				errorEmail: { ...data['errorEmail'], val: false },
			})
		} else {
			setData({
				...data,
				email: { ...data['email'], val: e.target.value },
				errorEmail: { ...data['errorEmail'], val: true },
			})
		}
	}

	return (
		<>
			<Container>
				<Card
					variant='outlined'
					sx={{
						marginY: 5,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Box>
						<TextField
							// variant='standard'
							label='Username'
							placeholder='Username'
							sx={{
								marginY: 4,
								marginLeft: 4,
							}}
							InputLabelProps={{
								shrink: true,
							}}
							onBlur={(e) =>
								setData({
									...data,
									userName: {
										...data['userName'],
										val: e.target.value,
									},
								})
							}
						/>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<TextField
							// variant='standard'
							label='Password'
							placeholder='Password'
							type='password'
							sx={{
								marginY: 4,
								marginLeft: 4,
							}}
							InputLabelProps={{
								shrink: true,
							}}
							onBlur={(e) =>
								setData({
									...data,
									password: { ...data['password'], val: e.target.value },
								})
							}
						/>
						<TextField
							// variant='standard'
							label='Confirm Password'
							placeholder='Password'
							type='password'
							error={data.errorConfirmPassword['val']}
							sx={{
								marginY: 4,
								marginLeft: 4,
							}}
							InputLabelProps={{
								shrink: true,
							}}
							onBlur={(e) => {
								if (e.target.value === data.password['val']) {
									setData({
										...data,
										confirmPassword: {
											...data['confrimPassword'],
											val: e.target.value,
										},
										errorConfirmPassword: {
											...data['errorConfirmPassword'],
											val: false,
										},
									})
								} else {
									setData({
										...data,
										confirmPassword: {
											...data['confirmPassword'],
											val: e.target.value,
										},
										errorConfirmPassword: {
											...data['errorConfirmPassword'],
											val: true,
										},
									})
								}
							}}
						/>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}>
						<TextField
							// variant='standard'
							label='Email'
							placeholder='Example@gmail.com'
							error={data.errorEmail['val']}
							required
							sx={{
								marginY: 4,
								marginLeft: 4,
							}}
							InputLabelProps={{
								shrink: true,
							}}
							onBlur={(e) => {
								handleError(e)
							}}
						/>
						<TextField
							label='Confirm Email'
							placeholder='Example@gmail.com'
							error={data.errorEmailConfirm['val']}
							sx={{
								marginY: 4,
								marginLeft: 4,
							}}
							InputLabelProps={{
								shrink: true,
							}}
							onBlur={(e) => {
								if (e.target.value === data.email['val']) {
									setData({
										...data,
										confirmEmail: {
											...data['confrimEmail'],
											val: e.target.value,
										},
										errorEmailConfirm: {
											...data['errorEmailConfirm'],
											val: false,
										},
									})
								} else {
									setData({
										...data,
										confirmEmail: {
											...data['confirmEmail'],
											val: e.target.value,
										},
										errorEmailConfirm: {
											...data['errorEmailConfirm'],
											val: true,
										},
									})
								}
							}}
						/>
					</Box>
				</Card>
			</Container>
		</>
	)
}
export default FormUserDetails
