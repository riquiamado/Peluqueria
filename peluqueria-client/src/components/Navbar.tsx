// src/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container,Avatar,Box, Menu, MenuItem, Button, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//import AdbIcon from '@mui/icons-material/Adb';
//import { useStore } from '../store/navbar';
import logo from "../assets/logo.jpg"
import { Link } from 'react-scroll';



 const pages = ["Sobre mi",'Servicios', 'Turnos', 'Productos'];
 const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
 const sections = ['sobre mi','servicios', 'turnos', 'productos'];


const Navbar: React.FC = () => {
  // const open = useStore((state) => state.open);
  // const setOpen = useStore((state) => state.setOpen);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleMenuClick = () => {
  //   setOpen(!open);
  // };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" >
      <Toolbar disableGutters>
      <Avatar alt="logo" src={logo} variant='square' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ width: '200px', height: '70px' ,borderRadius:'10px',marginRight:0}} />
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar alt="logo" src={logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
           <Typography
             variant="h5"
             noWrap
             component="a"
             href=""
             sx={{
               mr: 2,
               display: { xs: 'flex', md: 'none' },
               flexGrow: 1,
               fontFamily: 'monospace',
               fontWeight: 700,
               letterSpacing: '.3rem',
               color: 'inherit',
               textDecoration: 'none',
             }}
           >
             ANGEL ORONA
           </Typography>
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'  },justifyContent:"flex-end" }}>
             {pages.map((page,index) => (
              <Link
              key={page}
              to={sections[index]}
              smooth={true}
              duration={500}
              offset={-70}
          >
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  {page}
              </Button>
          </Link>
             ))}
           </Box>

           <Box sx={{ flexGrow: 0 }}>
             <Tooltip title="Open settings">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
               </IconButton>
             </Tooltip>
             <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
             >
               {settings.map((setting) => (
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                   <Typography textAlign="center">{setting}</Typography>
                 </MenuItem>
               ))}
             </Menu>
           </Box>
       
      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

