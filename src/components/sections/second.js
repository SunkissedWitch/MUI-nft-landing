import React from "react";

import { 
	Typography, 
	Box,
	Container,
	Stack
} from '@mui/material';

const selection = "last 7 days";

function Second () {


	return (
		<Container
		sx={{
			display: 'flex', 
			flexDirection: 'row', 
			justifyContent: 'space-between', 
			minHeight: 400,

		}}
	 >

			<Box sx={{ 
				width: "100%",
				mt: 15,
		}}>
			<Stack direction="row" spacing={2} justifyContent="center">
				<Typography variant="h3">
					Top collections over 
				</Typography>
				<Typography variant="h3" color='primary'>{selection}</Typography>	
			</Stack>

			</Box>

			
		</Container>

	)
}

export default Second;