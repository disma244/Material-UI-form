import { ExpandMore } from '@mui/icons-material'
import {
	Container,
	Card,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material'

function Faq() {
	return (
		<>
			<Container>
				<Card
					variant='outlined'
					sx={{
						marginY: 5,
					}}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant='h6'>
								Why did you make a frequently asked questions section to this
								site?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Wanted to use more of the components in Material UI. Using
								mostly textfields, cards and boxes doesn't give you much useful
								experience using the UI library.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant='h6' component='body1'>
								What do you do with the data collected here?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								The information collected on this page never leaves the browser.
								Its all stored in your browsers local storage.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant='h6'>
								Why don't you make something more interesting than a form?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								This site was a project to reacquaint myself with react after
								not being able to work on any react project for awhile. This
								site was made to re-introduce jsx and react syntax, react desgin
								principles and react best practices.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Card>
			</Container>
		</>
	)
}
export default Faq
