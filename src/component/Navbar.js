import * as React from "react";
// Import MUI
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// Import link react router
import { Link } from "react-router-dom";
// Import image
import logo from '../img/logo.gif';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar
      position="static"
      // CSS Background-color
      sx={{ bgcolor: "#1f2235" }}
      // Elevation (bayangan)
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/project-mui-portfolio-adelia/">
              <img src={logo} alt="Adelia" width={"100%"}/>
            </Link>
          </Typography>

          {/* Navbar Mobile*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Menu Navbar Mobile */}
              <div className="bar">
                {/* Home */}
                <Link to="/project-mui-portfolio-adelia/" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                {/* About */}
                <Link to="/about" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About</Typography>
                  </MenuItem>
                </Link>
                {/* Project */}
                <Link to="/project" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Project</Typography>
                  </MenuItem>
                </Link>
                {/* Skill */}
                <Link to="/skill" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Skill</Typography>
                  </MenuItem>
                </Link>
                {/* Contact */}
                <Link to="/contact" className="btn">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Contact</Typography>
                  </MenuItem>
                </Link>
              </div>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/project-mui-portfolio-adelia/">
              <img src={logo} alt="Adelia"/>
            </Link>
          </Typography>
            
          {/* Navbar Desktop*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Menu Navbar Desktop*/}
            <div className="navbar">
              {/* Home */}
              <Link to="/project-mui-portfolio-adelia/" className="btn">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
              </Link>
              {/* About */}
              <Link to="/about" className="btn">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  About
                </Button>
              </Link>
              {/* Project */}
              <Link to="/project" className="btn">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Project
                </Button>
              </Link>
              {/* Skill */}
              <Link to="/skill" className="btn">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Skill
                </Button>
              </Link>
              {/* Contact */}
              <Link to="/contact" className="btn">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;