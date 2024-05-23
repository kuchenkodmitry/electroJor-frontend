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
import vkIco from "./img/download.png"
// import { Telegram } from "@mui/icons-material";

function InfoHeader() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    function onSubmit(data) {
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "dmitry.kuchenko@yandex.ru",
            Password: "20562E48951EB96B7D241652CEBB816A908E",
            To: 'dniwe.exe@ya.ru',
            From: "st1m2123@gmail.com",
            Subject: "Новый клиент",
            Body: data.phone
        }).then(
            message => alert(message)
        );
    }

    return (

        <div className={s.main}>
            <div className={s.backgroundPattern}>
                <div className={s.titleHeader}>
                    <img src="" alt="" />
                    <p>
                        Электромонтажные работы в городе Волгаград и Волгоградской области
                    </p>
                    <img src="" alt="" />
                </div>
            </div>
            <div className={s.leftBlock}>
                <div className={s.leftBlockContent}>
                    <p className={s.leftBlockTitle}>
                        ЭлектроЖор - электромонтажные работы в городе Волгаград и Волгоградской области
                    </p>
                    <p className={s.leftBlockDescription}>
                        Электромонтаж от профессионалов. Создание и замена электропроводки в квартирах, домах, офисах и производственных помещениях. Качество и надежность.
                    </p>
                    <div className={s.socialBtn}>
                        <ThreeBtn />
                    </div>
                </div>
            </div>

            <div className={s.rightBlock}>
                {/* <p className={s.mobileTitleRight}>Электромонтажные работы в Волгаграде и Волгоградской области</p> */}
                <div className={s.flexMobileBottom}>
                    <div className={s.mobileSocial}>
                        <a className={s.formSocialBtn} href="https://t.me/+79093839946" target="_blank">
                            <img src={TelegramIco} alt="" />
                        </a>
                        <a className={s.formSocialBtn} href="https://api.whatsapp.com/send/?phone=%2B79093839946&text&type=phone_number&app_absent=0" target="_blank">
                            <img src={WhatsAppIco} alt="" />
                        </a>
                        <a className={s.formSocialBtn} href="tel:+79093839946" target="_blank">
                            <img src={PhoneIco} alt="" />
                        </a>
                        <a className={s.formSocialBtn} href="https://vk.com/elektriks34" target="_blank">
                            <img src={vkIco} alt="" />
                        </a>
                    </div>
                    <Box className={s.listBlock}>
                        <div className={s.listText}>
                            <img draggable="false" height="20px" src={BuilderIco} alt="" />
                            <p className={s.listTextRight}>
                                профессионалы
                            </p>
                        </div>
                        <div className={s.listText}>
                            <p className={s.listTextRight}>
                                Высокое качество
                            </p>
                            <img height="20px" src={LikeIco} alt="" />
                        </div>
                        <div className={s.listText}>
                            <img height={"22px"} src={ClockIco} alt="" />
                            <p className={s.listTextRight}>
                                Выполнение в срок
                            </p>
                        </div>
                    </Box>
                </div>

                <div style={{ display: "flex", height: "200px", alignItems: "end", justifyContent: "end" }}>
                    <div className={s.callBackForm}>
                        <div className={s.rightText}>
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
                        </div>
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
                                <button type="submit" className={s.buttonSend}>Отправить</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default InfoHeader;