// import Text from "@mui/material/Typography"
import style from "./Scheme.module.css"
import schemeImg from "./img/scheme.png"
import Box from "@mui/material/Box"
import MobileSchemeImg from "./img/MobileCheme.png"
import { Typography } from "@mui/material"

function Scheme() {
    return (
        <div >

            <Box className={style.schemeBlock} sx={{
                display: { xs: "none", md: "flex" }
            }}>
                <h3>
                    Как мы работаем ?
                </h3>
                <img width={1200} src={schemeImg} alt="" />
            </Box>
            <Box className={style.schemeBlock} sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                gap: "50px"
            }}>
                <Typography sx={{
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                    letterSpacing: "2.2px",
                }}>
                Как мы работаем ?
                </Typography>
                <img src={MobileSchemeImg} alt="" />
            </Box>
        </div>
    )
}

export default Scheme;