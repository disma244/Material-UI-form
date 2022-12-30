import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { useEffect } from 'react'
import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { useState } from 'react'
import { DialogContent, DialogContentText } from '@mui/material'

function Confirm({ data, setData }) {
	const [open, setOpen] = useState(false)
	const [openError, setOpenError] = useState(false)

	useEffect(() => {
		console.log(data['step'])
		localStorage.setItem('info', JSON.stringify(data))
	}, [data])

	const pathing = {
		0: '/',
		1: '/PersonalDetails',
		2: '/Overview',
	}

	const clickForward = () => {
		setData({
			...data,
			step: data.step + 1,
		})
	}

	const clickBackwards = () => {
		setData({
			...data,
			step: data.step - 1,
		})
	}

	const handleClickOpen = () => {
		for (let key in data) {
			if (data[key]['val'] === '' || data[key]['val'] === true) {
				console.log(data[key]['val'])
				return setOpenError(true)
			}
		}
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		setOpenError(false)
	}

	return (
		<>
			<Dialog open={openError} onClose={handleClose}>
				<DialogTitle textAlign='center'>
					Form filled out improperly. Correct the following fields:
				</DialogTitle>
				<DialogContent>
					{Object.keys(data).map((key) => {
						if (data[key]['val'] === '' || data[key]['val'] === true) {
							return (
								<DialogContentText key={data[key]['name']} textAlign='center'>
									{`${data[key]['name']}`}
								</DialogContentText>
							)
						} else {
							return false
						}
					})}
				</DialogContent>
			</Dialog>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{'Thank you for your submission'}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Usually I'd like to re-direct you somewhere but this is the end of
						this webpage
					</DialogContentText>
				</DialogContent>
			</Dialog>

			<Container
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}>
				<Button
					href={`${pathing[data.step]}`}
					onClick={clickBackwards}
					variant='contained'
					size='medium'
					sx={{
						paddingX: '5%',
						marginRight: 2,
					}}
					disabled={data.step === 0 ? true : false}>
					Back
				</Button>

				<Button
					href={`${pathing[data.step]}`}
					onClick={
						data.step === 2
							? (e) => {
									e.preventDefault()
									handleClickOpen()
							  }
							: clickForward
					}
					variant='contained'
					sx={{
						paddingX: '5%',
						marginLeft: 2,
					}}
					// disabled={data.step === 2 ? true : false}
				>
					Next
				</Button>
			</Container>
		</>
	)
}
export default Confirm
