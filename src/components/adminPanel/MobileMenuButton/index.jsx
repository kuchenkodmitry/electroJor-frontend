import React from 'react';
import { Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './style.module.css';

function MobileMenuButton({ onClick }) {
    return (
        <Fab className={style.fab} color="primary" onClick={onClick}>
            <MenuIcon />
        </Fab>
    );
}

export default MobileMenuButton;
