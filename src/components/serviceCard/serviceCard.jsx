import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import s from "./serviceCard.module.css"
import house1 from './img/house1.png'
import house2 from './img/house2.png'
import office from "./img/office.png"
import production from './img/production.png'

function ServiceCard() {
    return (
        <div className={s.serviceBlock}>
        <Typography
        sx={{color: "#000",
            textAlign: "center",
            textShadow: "0px 4px 4px rgba(115, 97, 97, 0.25)",
            fontFamily: "Roboto",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "516",
            lineHeight: "normal",
            letterSpacing: "3.22px",
        }}
        >
        ВЫПОЛНЯЕМ ЛЮБЫЕ РАБОТЫ ПО МОНТАЖУ, ЗАМЕНЕ И РЕМОНТУ ЭЛЕКТРИКИ
        </Typography>
        <Box>
            <div className={s.cards}>
            <div style={{    
                background: "linear-gradient(90deg, #D1913C 0%, #FFD194 100%)"
}} className={s.card}>
                <Typography>
                Монтаж Электрики в Новостройке
                </Typography>
                <img src={house1} className={s.img}/>
            </div>
            <div style={{   background: "linear-gradient(90deg, #304352 0%, #D7D2CC 100%)"
}} className={s.card}>
                <Typography>
                Монтаж в Офисных помещениях
                </Typography>
                <img src={office} className={s.img}/>
            </div>
            <div style={{  background: "linear-gradient(90deg, #2980B9 0%, #2C3E50 100%)"
}} className={s.card}>
                <Typography>
                Монтаж в производственных помещениях
                </Typography>
                <img src={production} style={{borderRadius: "0 0 40px 40px"}} className={s.img}/>
            </div>
            <div style={{   background: "linear-gradient(90deg, #00467F 0%, #A5CC82 100%)"
}} className={s.card}>
                <Typography>
                Замена старой проводки
                </Typography>
                <img src={house2} style={{borderRadius: "0 0 40px 40px"}} className={s.img}/>
            </div>
            </div>
        </Box>
        </div >
    )
}

export default ServiceCard;