import s from "./InfoHeader.module.css"
import ThreeBtn from '../buttons/threeSocialButton'
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import questionImg from './img/quest.png'
import RussianFlagIco from "./img/RussianFlag.png"
import BuilderIco from "./img/builder.png"
import LikeIco from "./img/like.png"
import ClockIco from "./img/clock.png"

function InfoHeader() {
    return (
        <div className={s.main}>
            <div className={s.leftBlock}>
                <Typography sx={{
                    color: "#FFF",
                    textAlign: "right",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontHeight: "556",
                    lineHeight: "normal",
                    fontVariant: "all-small-caps",
                    letterSpacing: "2.04px",
                    display: "flex",
                    width: "451px",
                    height: "133px",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexShrink: 0
                    
                    }}>
                Электромонтажные работы в городе Волгаград и Волгоградской области
                </Typography>
                <Typography sx={{
                    color: "#C6C6C6",
                    textAlign: "right",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "250",
                    lineHeight: "normal",
                    width: "520px",
                    height: "133px",
                }}>
                Электромонтаж от профессионалов. Создание и замена электропроводки в квартирах, домах, офисах и производственных помещениях. Качество и надежность.
                </Typography>
                <ThreeBtn />
            </div>
            <div className={s.rightBlock}>
                <Box className={s.listBlock}>
                    {/* <Typography className={s.listText}
                    sx={{width: "259px",
                        height: "40px",
                        flexShrink: "0",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Archivo",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        }}>
                    За что нас ценят
                            <img src={questionImg} alt="" />
                    </Typography> */}
                   <div style={{
                    width: "231px",
                    height: "50px",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "10px"
                    }} className={s.listText}>
                   <img height="25px" src={BuilderIco} alt="" />
                   <Typography  sx={{
                        color: "#FFF",
                        fontFamily: "Archivo",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}>
                    
                    Только профессиональные специалисты
                    </Typography>
                   </div>
                    <Typography className={s.listText} sx={{
                        width: "188px",
                        height: "42px",
                        flexShrink: "0",
                        color: "#FFF",
                        fontFamily: "Archivo",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}>
                        <img src={LikeIco} alt="" />
                    Высокое качество выполнения работ
                    </Typography>
                    <Typography className={s.listText} sx={{
                        width: "155px",
                        height: "42px",
                        flexShrink: "0",
                        color: "#FFF",
                        fontFamily: "Archivo",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}>
                        <img src={ClockIco} alt="" />
                    Выполнение работ в срок
                    </Typography>
                    
                </Box>
                <div style={{display: "flex",  height: "200px", alignItems: "end", justifyContent: "end"}}>
                <div className={s.callBackForm}>
                    <Typography sx={{
                        paddingLeft: "40px",
                        color: "#FFF",
                        fontFamily: "Poppins",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "100",
                        lineHeight: "normal",
                }}>
                    Заказать обратный звонок
                    </Typography>
                    <Typography sx={{
                        paddingLeft: "40px",
                        color: "white",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "0",
                        lineHeight: "normal",
                        marginBottom: "18px"
                }}>
                    Оставьте ваш номер и мы вам перезвоним 
                    </Typography>
                    <div className={s.formSend}>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}>
                        <img src={RussianFlagIco}/>
                    <input placeholder=" +7 (999) 999 99 99" className={s.inputStyle} type="text" />
                    </div>
                    <button className={s.buttonSend}>Отправить</button>
                    </div>
                </div>
                </div>
            </div>
        </div >
    )
}

export default InfoHeader;