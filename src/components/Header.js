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
	Button,
	IconButton,
	Box,
	MenuItem,
	Menu,
	Icon,
	Container
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
          <Box sx={{ flex: 3 }} />

          <SearchBar />

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
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                variant="link"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}

            <IconButton>
              <Icon component={UserIcon} fontSize="small" />
            </IconButton>

            <IconButton>
              <Icon component={wallet} fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;