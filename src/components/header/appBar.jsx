import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from './logo.png'
import s from './appBar.module.css'

const pages = ['Услуги', 'Цены', 'Контакты', 'Наши работы'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Text = [
  {
    name: "Услуги",
    link: "#uslugi"
  },
  {
    name: "О компании",
    link: "#about"
  },
  {
    name: "Контакты",
    link: "#footer"
  },
  {
    name: "Наши работы",
    link: "#works"
  },
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
   <Box sx={{
    display: {xs: "none", md: "flex"}
}} >
 <div className={s.AppBarBlock}>
      <div className={s.logoBlock}>
      <img src={Logo} alt="" width={67} height={67} />
    <div className={s.logoTextBlock}>
    <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 550,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
              mr: 0
            }}
          >
            ЭлектроЖор 
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 540,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
              mr: 0,
              fontSize: "14px"
            }}
          >
            Электромонтажные работы 
          </Typography>
    </div>
      </div>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {Text.map((el) => (
              <Button
                key={el.name}
                onClick={() => {
                  handleCloseNavMenu();
                  window.location.href = el.link
                }}
                sx={{color: 'black' }}
              >
                {el.name}
              </Button>
            ))}
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
          }}>
              <a href='tel:+79093839946'
              style={{color: "#000",
                fontFamily: "Inter",
                fontSize: "23px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal", 
                textDecoration: "none"
              }}
              >
                +7-909-383-99-46
              </a>
              <a href='tel:+79093839946'
               style={{
                color: "#5273B2",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textDecorationLine: "underline"
              }}>
                Заказать обратный звонок
              </a>
          </Box>
    </div>
   </Box>
   <Box sx={{
    display: { xs: 'flex', md: 'none' },
    justifyContent: "space-between"
   }}>
   <div className={s.logoBlock}>
      <img src={Logo} alt="" width={67} height={67} />
    <div className={s.logoTextBlock}>
    <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontWeight: 550,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
              lineHeight: "19px"
            }}
          >
            Электро<br/>Жор
          </Typography>
    </div>
    </div>
    <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
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
              {Text.map((el) => (
                <MenuItem key={el.name} onClick={() => {
                  handleCloseNavMenu();
                }}>
                  <Typography textAlign="center">{el.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
   </Box>
    </>
  );
}
export default ResponsiveAppBar;


