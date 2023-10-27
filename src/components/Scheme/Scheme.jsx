// import Text from "@mui/material/Typography"
import style from "./Scheme.module.css"
import schemeImg from "./img/scheme.png"

function Scheme () {
    return (
        <div className={style.schemeBlock}>
            <h3>
            Как мы работаем ?
            </h3>
            <img src={schemeImg} alt="" />
        </div>
    )
}

export default Scheme;