import React from "react";
import {ReactComponent as Logo} from '../logo.svg';
import SearchBar from "./Search";
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as wallet } from '../Icons/akar-icons_wallet.svg';
import { ReactComponent as UserIcon } from '../Icons/UserIcon.svg';


import { 
	AppBar,
	Toolbar, 
	Typography, 
	IconButton,
	Box,
	MenuItem,
	Menu,
	Icon,
	Container,
  Stack,
  Link
} from '@mui/material';

const pages = ['Marketplace', 'Stats', 'Resources'];


const Header = () => {

	const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


	return (
    <AppBar position="static" color="default">
      <Container disableGutters maxWidth="lg">
        <Toolbar>
          <IconButton
            disableRipple
            onClick={() => console.log("click")}
            href="#"
          >
            <Logo />
          </IconButton>
          <Box sx={{ flex: { xs: 3,  md: 4 } }} />

          <SearchBar />
          <Box sx={ { flex: 1 }} />

          <Box
            sx={{
              flexGrow: 4,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Stack direction="row" spacing={1}  sx={{ my: 'auto', mx: 2, display: "flex"}}>
                <IconButton>
                  <Icon component={UserIcon} fontSize="small" />
                </IconButton>

                <IconButton>
                  <Icon component={wallet} fontSize="medium" />
                </IconButton>
              </Stack>
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              typography: 'h6',
              '& > :not(style) + :not(style)': {
                ml: 2,
                },
            }}
          >
            {pages.map((page) => (
              <Link
              component="button"
              variant="body2"
              underline="none"
              
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: "auto", color: "black", display: "flex", typography: 'h6' }}
              > 
                {page} 
              </Link>
            ))}
            <Stack direction="row" spacing={1}  sx={{ my: 'auto', display: "flex" }}>
              <IconButton>
                <Icon component={UserIcon} fontSize="small" />
              </IconButton>

              <IconButton>
                <Icon component={wallet} fontSize="medium" />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;