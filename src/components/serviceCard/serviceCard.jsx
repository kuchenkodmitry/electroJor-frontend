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
            <p className={s.titileSector}>
                ВЫПОЛНЯЕМ ЛЮБЫЕ РАБОТЫ ПО МОНТАЖУ, ЗАМЕНЕ И РЕМОНТУ ЭЛЕКТРИКИ 
            </p>
            <div >
                <div className={s.cards}>
                    <div  style={{
                        background: "linear-gradient(90deg, #D1913C 0%, #FFD194 100%)"
                    }} className={s.card}>
                        <p className={s.firstCardTitle}>
                        Монтаж Электрики в Новостройке
                    </p>
                    <img src={house1} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #304352 0%, #D7D2CC 100%)"
                }} className={s.card}>
                    <p className={s.secondCardTitle}>
                        Монтаж в Офисных помещениях
                    </p>
                    <img src={office} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #2980B9 0%, #2C3E50 100%)"
                }} className={s.card}>
                    <p className={s.tridCardTitle}>
                        Монтаж в производственных помещениях
                    </p>
                    <img width="160px" src={production} style={{ borderRadius: "0 0 30px 30px" }} className={s.img} />
                </div>
                <div style={{
                    background: "linear-gradient(90deg, #00467F 0%, #A5CC82 100%)"
                }} className={s.card}>
                    <p className={s.fourCardTitile}>
                        Замена старой проводки
                    </p>
                    <img src={house2} style={{ borderRadius: "0 0 30px 30px" }} className={s.img} />
                </div>
        </div>
        </div >
        </div >
    )
}

export default ServiceCard;