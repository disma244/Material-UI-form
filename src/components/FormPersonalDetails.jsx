import { Container } from '@mui/material'
import { Card } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import { MenuItem } from '@mui/material'
import { useEffect } from 'react'

function FormPersonalDetails({ data, setData }) {
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
		console.log(data)
		// eslint-disable-next-line
	}, [])

	const states = [
		'none',
		'Alabama',
		'Alaska',
		'American Samoa',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'District of Columbia',
		'Florida',
		'Georgia',
		'Guam',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Minor Outlying Islands',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Northern Mariana Islands',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Puerto Rico',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'U.S. Virgin Islands',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming',
	]

	const exp = ['None', 'Student', 'Entry level', 'Experienced']

	return (
		<>
			<Container>
				<Card
					variant='outlined'
					sx={{
						marginY: 5,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'center',
					}}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
						}}>
						<TextField
							label='First Name'
							placeholder='John'
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
									firstName: { ...data['firstName'], val: e.target.value },
								})
							}
						/>
						<TextField
							label='Last Name'
							placeholder='Doe'
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
									lastName: { ...data['lastName'], val: e.target.value },
								})
							}
						/>
					</Box>
					<Box>
						<TextField
							label='City'
							placeholder='City'
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
									city: { ...data['city'], val: e.target.value },
								})
							}
						/>
						<TextField
							label='State'
							select
							defaultValue={'Alabama'}
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
									state: { ...data['state'], val: e.target.value },
								})
							}>
							{states.map((option) => (
								<MenuItem key={states.indexOf(option)} value={option}>
									{option}
								</MenuItem>
							))}
						</TextField>
						<TextField
							label='Zipcode'
							placeholder='zip'
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
									zipcode: { ...data['zipcode'], val: e.target.value },
								})
							}
						/>
					</Box>
					<Box>
						<TextField
							label='Occupation'
							placeholder='WebDev'
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
									occupation: { ...data['occupation'], val: e.target.value },
								})
							}
						/>
						<TextField
							label='Experience'
							select
							defaultValue={'None'}
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
									experience: { ...data['experience'], val: e.target.value },
								})
							}>
							{exp.map((option) => (
								<MenuItem key={exp.indexOf(option)} value={option}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Box>
					<Box width={'80%'}>
						<TextField
							label='Feedback'
							placeholder='Feedback here'
							fullWidth
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
									feedback: { ...data['feedback'], val: e.target.value },
								})
							}
						/>
					</Box>
				</Card>
			</Container>
		</>
	)
}
export default FormPersonalDetails
