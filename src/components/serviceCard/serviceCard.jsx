import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import s from "./serviceCard.module.css"
import house1 from './img/house1.png'
import house2 from './img/house2.png'
import office from "./img/office.png"
import production from './img/production.png'
import '../../App.css';
import React, { useContext } from "react";
import { Context } from "../context";


function ServiceCard() {
    const [context, setContext] = useContext(Context);
    return (
        <div id="uslugi" className={s.serviceBlock}>
            <Typography
                sx={{
                    color: "#000",
                    textAlign: "center",
                    textShadow: "0px 4px 4px rgba(115, 97, 97, 0.25)",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    letterSpacing: "2.70px",
                    fontFamily: "Roboto",
                    width: "750px",
                    margin: "45px auto 50px",
                    display: { xs: 'none', md: 'flex'}
                }}
            >
                ВЫПОЛНЯЕМ ЛЮБЫЕ РАБОТЫ ПО МОНТАЖУ, ЗАМЕНЕ И РЕМОНТУ ЭЛЕКТРИКИ 
            </Typography>
            <Typography
                sx={{
                    color: "#000",
                    textAlign: "center",
                    textShadow: "0px 4px 4px rgba(115, 97, 97, 0.25)",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    letterSpacing: "2.70px",
                    fontFamily: "Roboto",
                    width: "300px",
                    margin: "30px auto",
                    display: { xs: 'flex', md: 'none'}
                }}
            >
                ВЫПОЛНЯЕМ ЛЮБЫЕ РАБОТЫ ПО МОНТАЖУ, ЗАМЕНЕ И РЕМОНТУ ЭЛЕКТРИКИ
            </Typography>
            <Box sx={{display: {xs: "flex", md: "none"}}}>
                <div className={s.cards}>
                    <div onClick={() => setContext(true)} style={{
                        background: "linear-gradient(90deg, #D1913C 0%, #FFD194 100%)"
                    }} className={s.card}>
                        <Typography sx={{
                            margin: "10px 0 0 15px",
                            width: "100px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "20px",
                            

                }}>
                        Монтаж Электрики в Новостройке
                    </Typography>
                    <img src={house1} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #304352 0%, #D7D2CC 100%)"
                }} className={s.card}>
                    <Typography sx={{
                            margin: "10px 0 0 15px",
                            width: "100px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "20px"
                }}>
                        Монтаж в Офисных помещениях
                    </Typography>
                    <img src={office} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #2980B9 0%, #2C3E50 100%)"
                }} className={s.card}>
                    <Typography sx={{
                            margin: "10px 0 0 15px",
                            width: "100px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "18px"
                }}>
                        Монтаж в производственных помещениях
                    </Typography>
                    <img width="160px" src={production} style={{ borderRadius: "0 0 30px 30px" }} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #00467F 0%, #A5CC82 100%)"
                }} className={s.card}>
                    <Typography sx={{
                            textAlign: "right",
                            margin: "10px 0 0 35px",
                            width: "100px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "20px"
                }}>
                        Замена старой проводки
                    </Typography>
                    <img src={house2} style={{ borderRadius: "0 0 30px 30px" }} className={s.img} />
                </div>
        </div>
        </Box >
        <Box sx={{display: {xs: "none", md: "flex"}}}>
                <div className={s.cards}>
                    <div style={{
                        background: "linear-gradient(90deg, #D1913C 0%, #FFD194 100%)"
                    }} onClick={() => setContext(true)} className={s.card}>
                        <Typography sx={{
                            margin: "15px 0 0 25px",
                            width: "175px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "21px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "25px"
                }}>
                        Монтаж Электрики в Новостройке
                    </Typography>
                    <img src={house1} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #304352 0%, #D7D2CC 100%)"
                }} onClick={() => setContext(true)} className={s.card}>
                    <Typography sx={{
                            margin: "15px 0 0 25px",
                            width: "175px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "21px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "25px"
                }}>
                        Монтаж в Офисных помещениях
                    </Typography>
                    <img src={office} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #2980B9 0%, #2C3E50 100%)"
                }} onClick={() => setContext(true)} className={s.card}>
                    <Typography sx={{
                            margin: "15px 0 0 25px",
                            width: "175px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "21px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "25px"
                }}>
                        Монтаж в производственных помещениях
                    </Typography>
                    <img src={production} style={{ borderRadius: "0 0 40px 40px" }} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #00467F 0%, #A5CC82 100%)"
                }} onClick={() => setContext(true)} className={s.card}>
                    <Typography sx={{
                            textAlign: "right",
                            margin: "20px 25px 25px 25px",
                            width: "250px",
                            height: "85px",
                            flexShrink: "0",
                            color: "#FFF",
                            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.37)",
                            fontFamily: "Inter",
                            fontSize: "21px",
                            fontStyle: "normal",
                            fontWeight: "330",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            lineHeight: "25px"
                }}>
                        Замена старой проводки
                    </Typography>
                    <img src={house2} style={{ borderRadius: "0 0 30px 30px" }} className={s.img} />
                </div>
        </div>
        </Box >
        </div >
    )
}

export default ServiceCard;