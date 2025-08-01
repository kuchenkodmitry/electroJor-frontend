import style from "./style.module.css";
import logo from '../images/logoAdmin.png';
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { ElectricBolt, ExitToApp, Menu as MenuIcon } from "@mui/icons-material";

function Header({ onMenuToggle }) {
    return (
        <header className={style.adminHeader}>
            <div className={style.headerContainer}>
                <div className={style.brandWrapper}>
                    <div className={style.logoContainer}>
                        {/* <ElectricBolt className={style.logoIcon} /> */}
                        <img src={logo} alt="Логотип ЭлектроТочка34" className={style.logoImage} />
                    </div>
                    <div className={style.brandText}>
                        <Typography variant="h4" className={style.brandTitle}>
                            ЭлектроТочка34
                            <span className={style.brandBadge}>ADMIN</span>
                        </Typography>
                        <Typography variant="subtitle1" className={style.brandSubtitle}>
                            Панель управления сайтом
                        </Typography>
                    </div>
                </div>
                <div className={style.burger} onClick={onMenuToggle}>
                    <MenuIcon className={style.burgerIcon} />
                </div>
                <Link to="/" className={style.returnButton}>
                    <ExitToApp className={style.buttonIcon} />
                    <span>На сайт</span>
                </Link>
            </div>

            <div className={style.headerDivider}></div>
        </header>
    );
}

export default Header;