import s from "./InfoHeader.module.css"
import ThreeBtn from '../buttons/threeSocialButton'
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import RussianFlagIco from "./img/RussianFlag.png"
import BuilderIco from "./img/builder.png"
import LikeIco from "./img/like.png"
import ClockIco from "./img/clock.png"
import WhatsAppIco from '../buttons/img/WhatsAppIcon.png'
import TelegramIco from '../buttons/img/TelegramIcon.png'
import PhoneIco from '../buttons/img/PhoneIcon.png'
import { useForm } from "react-hook-form";

function InfoHeader() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    function onSubmit(data) {
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "dmitry.kuchenko@yandex.ru",
            Password : "20562E48951EB96B7D241652CEBB816A908E",
            To : 'dniwe.exe@ya.ru',
            From : "st1m2123@gmail.com",
            Subject : "Новый клиент",
            Body : data.phone
        }).then(
          message => alert(message)
        );
    }

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div className={s.main}>
                    <div className={s.leftBlock}>
                        <div className={s.leftBlockContent}>
                            <Typography sx={{
                                color: "#FFF",
                                textAlign: "right",
                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                fontSize: "24px",
                                fontStyle: "normal",
                                lineHeight: "normal",
                                fontVariant: "all-small-caps",
                                letterSpacing: "2.04px",
                                width: "451px",
                                height: "133px",
                                marginTop: 3
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
                                width: "500px",
                                height: "133px",
                            }}>
                                Электромонтаж от профессионалов. Создание и замена электропроводки в квартирах, домах, офисах и производственных помещениях. Качество и надежность.
                            </Typography>
                            <ThreeBtn /></div>
                    </div>
                    <div className={s.rightBlock}>
                        <Box className={s.listBlock}>
                            <div style={{
                                height: "42px",
                                display: "flex",
                                width: "250px",
                                gap: "17px",
                                padding: "4px 0 0 11px"
                            }} className={s.listText1}>
                                <img draggable="false" style={{ marginTop: "5px" }} height="20px" src={BuilderIco} alt="" />
                                <Typography sx={{
                                    color: "#FFF",
                                    fontFamily: "inter",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "normal",
                                }}>

                                    Только профессиональные специалисты
                                </Typography>
                            </div>
                            <div className={s.listText2}>
                                <Typography sx={{
                                    width: "252px",
                                    height: "42px",
                                    flexShrink: "0",
                                    color: "#FFF",
                                    fontFamily: "inter",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "normal",
                                    display: "flex",
                                    gap: "25px",
                                    textAlign: "right",
                                    margin: "4px 0 0 -12px"
                                }}>
                                    Высокое качество выполнения работ
                                    <img style={{ margin: "5.5px 0 0 0" }} height="20px" src={LikeIco} alt="" />
                                </Typography>
                            </div>
                            <div className={s.listText3}>
                                <Typography sx={{
                                    width: "195px",
                                    height: "42px",
                                    flexShrink: "0",
                                    color: "#FFF",
                                    fontFamily: "inter",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    lineHeight: "normal",
                                    display: "flex",
                                    gap: "20px",
                                    margin: "0px 0 0 11px",
                                    alignItems: "center"
                                }}>
                                    <img height={"22px"} src={ClockIco} alt="" />
                                    Выполнение работ в срок
                                </Typography>
                            </div>
                        </Box>
                        <div style={{ display: "flex", height: "200px", alignItems: "end", justifyContent: "end" }}>
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
                                    fontFamily: "inter",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: "0",
                                    lineHeight: "normal",
                                    marginBottom: "18px",
                                    color: "rgba(255, 255, 255, 0.67)"
                                }}>
                                    Оставьте ваш номер и мы вам перезвоним
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)} className={s.formSend}>
                                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                                        <img src={RussianFlagIco} />
                                        <input placeholder=" +7 (999) 999 99 99" className={s.inputStyle} type="text" id="standard-basic" label="Телефон" variant="standard" {...register('phone', {
                                required: "Заполните поле с номером телефона", pattern: {
                                    value: /\d+/,
                                    message: "Это поле только для цыфр"
                                }, minLength: {
                                    value: 10,
                                    message: "Минимальное количество символов в номере телефона 10"
                                },
                            })}
                                aria-invalid={errors.phone ? "true" : "false"}
                                required /> 
                                    </div>
                                    <button type="submit" className={s.buttonSend}>Отправить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <div className={s.main}>
                    <div className={s.leftBlock}>
                        <div className={s.leftBlockContent}>
                            <Typography sx={{
                                color: "#FFF",
                                textAlign: "right",
                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                fontSize: "16px",
                                fontStyle: "normal",
                                lineHeight: "normal",
                                fontVariant: "all-small-caps",
                                letterSpacing: "2.04px",
                                width: "270px",
                            }}>
                                Электромонтажные работы в городе Волгаград и Волгоградской области
                            </Typography>
                            <Typography sx={{
                                color: "#C6C6C6",
                                textAlign: "right",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "250",
                                width: "270px",
                            }}>
                                Электромонтаж от профессионалов. Создание и замена электропроводки в квартирах, домах, офисах и производственных помещениях. Качество и надежность.
                            </Typography>
                        </div>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.blur}>
                            <Typography sx={{
                                color: "#FFF",
                                fontFamily: "inter",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fonteHight: "700",
                                lineHeight: "normal",
                                width: "180px",
                                padding: "10px 15px",
                                background: " linear-gradient(90deg, rgba(83, 105, 118, 0.80) 0%, rgba(41, 46, 73, 0.80) 100%)",
                                borderRadius: "0 150px 150px 0",
                                marginBottom: "25px"
                            }}>
                                Клиенты выбрают нас, потому что у нас:
                            </Typography>
                            <div style={{width: "375px", 
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "end"
                        }}>
                            <Typography sx={{
                                textAlign: "left",
                                lineHeight: "18px",
                                borderRadius: "170px 0px 0px 170px",
                                background:" linear-gradient(270deg, rgba(83, 105, 118, 0.80) 0%, rgba(41, 46, 73, 0.80) 98.58%)",
                                width: "250px", 
                                color: "white",
                                padding: "5px 15px",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <img width={30} src={BuilderIco} alt="" />
                                Только профессиональные специалисты
                            </Typography>
                            </div>
                            <Typography sx={{
                                color: "#FFF",
                                textAlign: "right",
                                fontFamily: "inter",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fonteHight: "700",
                                lineHeight: "normal",
                                width: "235px",
                                padding: "6px 15px",
                                background: " linear-gradient(90deg, rgba(83, 105, 118, 0.80) 0%, rgba(41, 46, 73, 0.80) 100%)",
                                borderRadius: "0 150px 150px 0",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                Высокое качество выполненяемых работ
                                <img src={LikeIco} alt="" />
                            </Typography>
                            <div style={{width: "375px", 
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "end"
                        }}>
                            <Typography sx={{
                                textAlign: "left",
                                lineHeight: "18px",
                                borderRadius: "170px 0px 0px 170px",
                                background:" linear-gradient(270deg, rgba(83, 105, 118, 0.80) 0%, rgba(41, 46, 73, 0.80) 98.58%)",
                                width: "250px", 
                                color: "white",
                                padding: "10px 15px",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <img src={ClockIco} alt="" />
                                Выполнение в срок
                            </Typography>
                            </div>
                        </div>

                    </div>
                    <div className={s.mobileSocialNetworkBtm}>
                        <a style={{ backgroundColor: "#32B857" }} href="">
                            <img src={WhatsAppIco} alt="" />
                            Написать в What’s App</a>
                        <a style={{ backgroundColor: "#28A7E8" }} href="">
                            <img src={TelegramIco} alt="" />
                            Написать в telegram</a>
                        <a style={{ backgroundColor: "black", borderRadius: "0 0 40px 0" }} href="">
                            <img src={PhoneIco} alt="" />
                            Позвонить <br /> нам</a>
                    </div>
                </div >
            </Box>
        </>
    )
}

export default InfoHeader;