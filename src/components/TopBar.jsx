import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function TopBar({ data, setData }) {
	let home = () => {
		setData({
			...data,
			step: 0,
		})
	}
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Button color='inherit' href='/' onClick={home}>
							Form
						</Button>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, textAlign: 'center' }}>
							Multi-Step Form
						</Typography>
						<Button color='inherit' href='/Faq'>
							FAQ
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}
export default TopBar
