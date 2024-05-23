import style from "./callback1.module.css"
import Typography from "@mui/material/Typography"
import TreeSocialBtn from "../buttons/threeSocialButton"
import FlagImg from "./img/flag.png"
import pliers from "./img/pliers.png"
import { Box } from "@mui/material"
import { useForm } from "react-hook-form";

function CallBack1() {
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
        <div className={style.callbackBlock}>
            <div className={style.textBlock}>
                <Typography
                    sx={
                        {
                            color: "#000",
                            textAlign: "center",
                            fontFamily: "Poppins",
                            fontSize: "28px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                            letterSpacing: "2.8px",
                            display: {xs: "none", md: "flex"}
                        }
                    }
                >
                    Не нашли нужную услугу ?
                </Typography>
                <Typography
                    sx={
                        {
                            color: "#000",
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal",
                            letterSpacing: "2.8px",
                            width: "250px",
                            display: {xs: "flex", md: "none"}
                        }
                    }
                >
                    Не нашли нужную услугу ?
                </Typography>
                <Typography
                    sx={{
                        color: " #000",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "275",
                        lineHeight: "normal",
                        letterSpacing: "1.8px",
                        display: {xs: "none", md: "flex"}
                    }}
                >
                    Свжитесь с нами или оставьте свой номер и мы сами перезвоним как можно быстрее !
                </Typography>
                
                <form onSubmit={handleSubmit(onSubmit)} className={style.callBackForm}>
                <Box sx={{
                    display: {xs: "flex", md: "none"},
                    flexDirection: "column",
                    alignItems: "end"
                }}>
                    <Typography sx={{
                        fontSize: "22.4px",
                        color: "#343434"
                    }}>
                    Заказать обратный звонок
                    </Typography>
                    <Typography sx={{
                        fontSize: "14px",
                        color: "#343434"
                    }}>
                    Оставьте ваш номер и мы вам перезвоним 
                    </Typography>
                </Box>
                    <Box sx={{
                        display: {xs: "none" , md: "flex"}
                    }}>
                    <img src={FlagImg} alt="qwe" />
                    </Box>
                    <input placeholder=" +7 (999) 999 99 99" className={style.input} type="text" id="standard-basic" label="Телефон" variant="standard" {...register('phone', {
                                required: "Заполните поле с номером телефона", pattern: {
                                    value: /\d+/,
                                    message: "Это поле только для цыфр"
                                }, minLength: {
                                    value: 10,
                                    message: "Минимальное количество символов в номере телефона 10"
                                },
                            })}
                                aria-invalid={errors.phone ? "true" : "false"}
                                required/>
                    <button type="submit" className={style.button} >Отправить</button>
                </form>
                <Box sx={{
                    display: { xs: "none", md: "flex"}
                }}>
                <TreeSocialBtn style={{ gap: 35 }} />
                </Box>

            </div>
            <Box sx={{
                display: {xs: "none", md: "flex"}
            }}>
            <img style={{
                marginLeft: "150px", marginTop: "-25px", width: "157px",
                height: "98px",
                flexShrink: "0"
            }} src={pliers} alt="" />
            </Box>
            <Box sx={{
                display: {xs: "flex", md: "none"}
            }}>
            <img style={{
                marginLeft: "5px", marginTop: "-53px", width: "80px", height: "60px",
                flexShrink: "0"
            }} src={pliers} alt="" />
            </Box>
        </div>
    )
}

export default CallBack1