import {
	Container,
	List,
	Card,
	ListItem,
	ListItemText,
	Box,
	Typography,
} from '@mui/material'
import { useEffect } from 'react'

function Overview({ data, setData }) {
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
	return (
		<>
			<Container>
				<Card
					variant='outlined'
					sx={{
						marginY: 5,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}>
					<Box>
						<Typography
							variant='h6'
							component='h4'
							textAlign='center'
							sx={{
								marginTop: 3,
							}}>
							Please Confirm Your Information Below
						</Typography>
					</Box>
					<Box>
						<List
							sx={{
								marginTop: 1,
								marginBottom: 3,
							}}>
							<ListItem>
								<ListItemText
									primary={`User Name : ${data.userName['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Password : ${data.password['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`email : ${data.email['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`First Name : ${data.firstName['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Last Name : ${data.lastName['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`City : ${data.city['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`State : ${data.state['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Zipcode : ${data.zipcode['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Occupation : ${data.occupation['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Experience : ${data.experience['val']}`}
									sx={{
										textAlign: 'center',
									}}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Feedback : ${data.feedback['val']}`}
									sx={{
										textAlign: 'center',
										overflowWrap: 'break-word',
									}}
								/>
							</ListItem>
						</List>
					</Box>
				</Card>
			</Container>
		</>
	)
}
export default Overview
