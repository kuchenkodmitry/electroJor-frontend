import ElectricWorkerImg from "./img/ElectricWorker.png"
import Text from "@mui/material/Typography"
import RussianFlagIco from './img/flag.png'
import styled from "./callback.module.css"
import { Box } from "@mui/material"
import { useForm } from "react-hook-form";

function CallBackBottom() {
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
            <Box sx={{
                display: { xs: "none", md: "flex" }
            }}>
                <div className={styled.backgoundCallBack}>
                    <div className={styled.blur}>
                        <img className={styled.builderImg} src={ElectricWorkerImg} alt="" />
                        <div className={styled.contentCallbackBox}>
                            <Text sx={{
                                color: "#FFF",
                                textAlign: "right",
                                fontFamily: "Poppins",
                                fontSize: "36px",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "normal",
                                letterSpacing: "1px",
                                marginRight: "40px"
                            }}>Остались вопросы? Перезвоним в течении 20 минут !</Text>
                            <div className={styled.callbackBox}>
                                <Text sx={{
                                    marginLeft: "70px",
                                    color: "rgba(0, 0, 0, 0.40)",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: "200",
                                    lineHeight: "normal",
                                    letterSpacing: "1.625px",
                                }}>
                                    Номер телефона*
                                </Text>
                                <form onSubmit={handleSubmit(onSubmit)} className={styled.inputBlock}>
                                    <img src={RussianFlagIco} alt="" />
                                    <input placeholder=" +7 (999) 999 99 99" type="text" className={styled.callbackInput} id="standard-basic" label="Телефон" variant="standard" {...register('phone', {
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
                                    <button type="submit" className={styled.sendBtn}>Отправить</button>
                                </form>
                                <Text sx={{
                                    marginLeft: "70px",
                                    marginTop: "10px",
                                    color: "rgba(0, 0, 0, 0.40)",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: "200",
                                    lineHeight: "normal",
                                    letterSpacing: "1.625px",
                                }}>
                                    Нажимая кнопку, вы даете согласие на обработку персональных данных
                                </Text>
                            </div>
                        </div>
                    </div>

                </div>
            </Box>
            <Box sx={{
                display: {xs: 'flex', md: "none"}
            }} className={styled.mobileCallback}>
                <Text sx={{
                    color: "#FFF",
                    textAlign: "right",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "1px",
                    width: "240px",
                    marginRight:"30px",
                    marginTop: "40px"
                }}>Остались вопросы? Перезвоним в течении 20 минут !</Text>
                <form onSubmit={handleSubmit(onSubmit)} className={styled.mobileInputBox}>
                    <Text sx={{
                        color: "rgba(0, 0, 0, 0.40)",
                        fontFamily: "inter",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "normal",
                        letterSpacing: "1.625px",
                    }}>
                        Номер телефона*
                    </Text>
                    <div className={styled.mobileInput}>
                        <img src={RussianFlagIco} alt="" />
                        <input placeholder=" +7 (999) 999 99 99" type="text" style={{
                            borderRadius: "6px",
                            border: "1px solid #2359C1",
                            background: "#FFF",
                            width: "160px"
                        }}id="standard-basic" label="Телефон" variant="standard" {...register('phone', {
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
                    </div>
                    <Text sx={{
                        color: "rgba(0, 0, 0, 0.40)",
                        fontFamily: "inter",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "normal",
                        letterSpacing: "1.625px",
                    }}>
                        Нажимая кнопку, вы даете согласие на обработку персональных данных
                    </Text>
                    <button type="submit" className={styled.mobileBtn}>
                        Отправить
                    </button>
                </form>
            </Box>
        </>

    )
}

export default CallBackBottom;