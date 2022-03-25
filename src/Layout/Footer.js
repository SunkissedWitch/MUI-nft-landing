import * as React from 'react';
import { Container, Typography } from '@mui/material';

function Footer () {
	return (
		<footer>
			<Container sx={{ height: 200 , pt: 20}}>
				<Typography variant='subtitle1'>Here will be footer</Typography>       
			</Container>
		</footer>
	)
}
export default Footer;