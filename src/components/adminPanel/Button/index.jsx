import { Link } from "react-router-dom";
import style from "./style.module.css";
import { Typography } from "@mui/material";
import { forwardRef } from "react";

const Button = forwardRef(({ Icon, text, path, color = "#4e73df" }, ref) => {
    const hoverColor = `${color}30`; // Добавляем прозрачность для hover эффекта

    return (
        <Link
            to={path}
            className={style.menuBtn}
            style={{
                '--btn-color': color,
                '--hover-color': hoverColor,
            }}
            ref={ref}
        >
            <div className={style.iconContainer}>
                {Icon && <Icon className={style.btnIcon} />}
            </div>
            <Typography variant="body1" className={style.btnText}>
                {text}
            </Typography>
            <div className={style.arrowIcon}>&rarr;</div>
        </Link>
    );
});
export default Button;
