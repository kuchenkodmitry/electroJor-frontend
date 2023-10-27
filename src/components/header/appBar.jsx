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
              fontFamily: 'BlinkMacSystemFont',
              fontWeight: 700,
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
              fontFamily: 'BlinkMacSystemFont',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
              mr: 0
            }}
          >
            Электромонтажные работы 
          </Typography>
    </div>
      </div>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{color: 'black' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
              <Typography
              sx={{color: "#000",
                fontFamily: "Inter",
                fontSize: "23px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal", 
              }}
              >
                +7-992-150-44-66
              </Typography>
              <Typography sx={{
                color: "#5273B2",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textDecorationLine: "underline"
              }}>
                Заказать обратный звонок
              </Typography>
          </Box>
    </div>
    </>
  );
}
export default ResponsiveAppBar;


