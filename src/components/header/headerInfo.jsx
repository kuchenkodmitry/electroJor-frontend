import s from "./InfoHeader.module.css"
import ThreeBtn from '../buttons/threeSocialButton'
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import questionImg from './img/quest.png'


function InfoHeader() {
    return (
        <div className={s.main}>
            <div className={s.leftBlock}>
                <Typography sx={{
                    color: "#FFF",
                    textAlign: "right",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    fontFamily: "Roboto",
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
                    fontFamily: "Poppins",
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
                    <Typography className={s.listText}
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
                    </Typography>
                    <Typography className={s.listText} sx={{
                        width: "231px",
                        height: "42px",
                        flexShrink: "0",
                        color: "#FFF",
                        fontFamily: "Archivo",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}>
                    Только профессиональные специалисты
                    </Typography>
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
                    Выполнение работ в срок
                    </Typography>
                    
                </Box>
                <div>
                    <Typography>
                    Заказать обратный звонок
                    </Typography>
                    <Typography>
                    Оставьте ваш номер и мы вам перезвоним 
                    </Typography>
                    <input type="text" />
                    <button>Отправить</button>
                </div>
            </div>
        </div >
    )
}

export default InfoHeader;