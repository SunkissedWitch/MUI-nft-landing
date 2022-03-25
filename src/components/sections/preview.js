import React from "react";
import { styled } from '@mui/material/styles';
import bg from '../../images/bg.png';
import primeArt from '../../images/primeArt.png';
import { MyButton } from '../custom-components/MyButton';

import { 
	Typography, 
	Box,
	Container,
	Stack,
	Divider
} from '@mui/material';

function Preview () {

	const Layout = styled('section')(({ theme }) => ({
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			height: '60vh',
			minHeight: 462,
			maxHeight: 1300,
		},
	}));

	const Background = styled(Box)({
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		height:'100%',
		width: '100%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		zIndex: -2,
	});

	const Image = styled(Box)({
		position: 'relative',
		borderRadius: 10,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		zIndex: -2,
	});
	const HugeText = styled(Typography)({
		fontSize: '2.815rem',
		fontWeight: 600,
		lineHeight: '3.56rem'
	})
	const BoldText = styled(Typography)({
		fontWeight: 700,
		fontSize: "30px",
		color: "black",
	})
	const DescripionText = styled(Typography)({
		fontSize: '1.1rem',
	})

	const handleClick = () => {
		console.log("click!")
	}


	return (
    <Layout>
      <Background
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "#fff", // Average color of the background image.
          backgroundPosition: "center",
        }}
      />
      <Container
       sx={{
				 display: 'flex', 
				 flexDirection: 'row', 
				 justifyContent: 'space-between', 
				 minHeight: 462,}}
      >
        <Box
				sx={{
					display: 'flex', 
					flexDirection: 'column', 
					justifyContent: 'flex-end'}} 
				>
					<div>
						<div>
						<Stack direction="row" spacing={2}>
						<HugeText variant="overline" display="block" color='primary'>
							Discover</HugeText>
							<HugeText noWrap variant="overline" display="block" color="black">
								rare digital
							</HugeText>
							</Stack>
							<Stack direction="row" spacing={2}>
								<HugeText noWrap variant="overline" display="block" color="black">
									art and collect
								</HugeText>
								<HugeText 
								noWrap 
								variant="overline" 
								display="block" 
								color='primary' 
								sx={{ backgroundBlendMode: 'difference' }}>
									NFT's
								</HugeText>
							</Stack>						
						</div>
						<div>
							<Typography variant="body1" sx={{color: "#4F4F4F", fontSize: '1rem', my: 2}}>
								Explore the best collection from popular artist.
							</Typography>						
						</div>						
					</div>

					<Stack direction="row" spacing={2} sx={{my: 2}}>
						<MyButton
						onClick={handleClick} 
						size="large" 
						color="secondary" 
						variant="contained">
							Explore
						</MyButton>
						<MyButton
						onClick={handleClick}
							size="large"
							color="secondary"
							variant="outlined"
							sx={{ backgroundColor: "#fff" }}
						>
							Create
						</MyButton>
					</Stack>

					<Stack
						direction="row"
						spacing={4}
						divider={<Divider orientation="vertical" flexItem />}
						sx={{ mt: 4, textAlign: 'center' }}
					>
						<Stack>
							<BoldText variant="h4" gutterBottom>
								25k+
							</BoldText>
							<DescripionText variant="body2">
								Artwork
							</DescripionText>
						</Stack>
						<Stack>
							<BoldText variant="h4" gutterBottom>
								23k+
							</BoldText>
							<DescripionText variant="body2">
								Auction
							</DescripionText>
						</Stack>
						<Stack>
							<BoldText variant="h4" gutterBottom>
								15k+
							</BoldText>
							<DescripionText variant="body2">
								Artist
							</DescripionText>
						</Stack>
					</Stack>
				</Box>

        <Image
          sx={{
            backgroundImage: `url(${primeArt})`,
            backgroundPosition: "center",
            height: 400,
            width: 400,
						mt: 'auto',
          }}
        />
      </Container>
    </Layout>
  );

}

export default Preview;