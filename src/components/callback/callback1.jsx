import style from "./callback1.module.css"
import Typography from "@mui/material/Typography"
import TreeSocialBtn from "../buttons/threeSocialButton"
import FlagImg from "./img/flag.png"
import pliers from "./img/pliers.png"

function CallBack1 () {
    return(
        <div className={style.callbackBlock}>
        <div className={style.textBlock}>
        <Typography 
        sx={
        {color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
        letterSpacing: "2.8px"}
        }
        >
        Не нашли нужную услугу ?
        </Typography>
        <Typography
        sx={{
            color:" #000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "275",
            lineHeight: "normal",
            letterSpacing: "1.8px",
        }}
        >
        Свжитесь с нами или оставьте свой номер и мы сами перезвоним как можно быстрее !
        </Typography>
        <div className={style.callBackForm}>
        <img src={FlagImg} alt="qwe"/>
        <input className={style.input} type="text" />
        <button className={style.button}>Отправить</button>
        </div>
        <TreeSocialBtn style={{gap: 35}}/>

        </div>
        <img style={{marginLeft: "150px", marginTop: "-25px", width: "157px",
height: "98px",
flexShrink: "0"}} src={pliers} alt="" />
        </div>
    )
}

export default CallBack1