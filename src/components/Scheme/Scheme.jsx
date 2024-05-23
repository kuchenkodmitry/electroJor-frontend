// import Text from "@mui/material/Typography"
import style from "./Scheme.module.css"
import schemeImg from "./img/scheme.png"
// import Box from "@mui/material/Box"
import MobileSchemeImg from "./img/MobileCheme.png"
// import { Typography } from "@mui/material"

function Scheme() {
    return (
        <div className={style.schemeBlock}>
                <h3>
                    Как мы работаем ?
                </h3>
                <img width={1200} className={style.schemeImg} src={schemeImg} alt="" />
                <img width={1200} className={style.MobileSchemeImg} src={MobileSchemeImg} alt="" />
        </div>
    )
}

export default Scheme;