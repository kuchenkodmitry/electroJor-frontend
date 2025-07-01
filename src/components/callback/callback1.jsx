import style from "./callback1.module.css";
import Typography from "@mui/material/Typography";
import TreeSocialBtn from "../buttons/threeSocialButton";
import FlagImg from "./img/flag.png";
import pliers from "./img/pliers.png";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { maskPhoneInput } from "../../utils/phone";
import axios from "../../axios/axios";
import { motion } from "framer-motion";

function CallBack1() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    async function onSubmit(data) {
        try {
            await axios.post('/feedback', data);
            alert('Спасибо! Мы свяжемся с вами в течение 15 минут.');
            reset();
        } catch (e) {
            alert('Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами другим способом.');
        }
    }

    return (
        <Box
            className={style.callbackBlock}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Box className={style.contentWrapper}>
                <Box className={style.textBlock}>
                    {/* Заголовки */}
                    <Typography
                        variant="h3"
                        className={style.title}
                    >
                        Не нашли нужную услугу?
                    </Typography>



                    {/* Форма */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        className={style.callBackForm}
                    >


                        <div className={style.inputGroup}>
                            <Box className={style.flagIcon}>
                                <img src={FlagImg} alt="Флаг" />
                            </Box>
                            <Box className={style.inputWrapper}>
                                <input
                                    placeholder="+7 (___) ___-__-__"
                                    className={style.phoneInput}
                                    type="tel"
                                    {...register('phone', {
                                        required: "Укажите телефон",
                                        pattern: {
                                            value: /^(\+7|8)[0-9]{10}$/,
                                            message: "Некорректный номер"
                                        },
                                        onChange: (e) => {
                                            e.target.value = maskPhoneInput(e.target.value);
                                        },
                                    })}
                                    aria-invalid={errors.phone ? "true" : "false"}
                                />
                                {errors.phone && (
                                    <span className={style.errorMessage}>{errors.phone.message}</span>
                                )}
                            </Box>

                            <Box className={style.inputWrapper}>
                                <input
                                    placeholder="Ваше имя"
                                    className={style.nameInput}
                                    type="text"
                                    {...register('name', {
                                        required: "Укажите ваше имя",
                                        minLength: {
                                            value: 2,
                                            message: "Минимум 2 символа"
                                        }
                                    })}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && (
                                    <span className={style.errorMessage}>{errors.name.message}</span>
                                )}
                            </Box>


                            <button
                                type="submit"
                                className={style.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className={style.spinner}></span>
                                ) : (
                                    "Жду звонка"
                                )}
                            </button>
                        </div>
                        <Typography
                            variant="body1"
                            className={style.subtitle}
                        >
                            Свяжитесь с нами или оставьте номер — перезвоним в течение 15 минут
                        </Typography>
                    </Box>

                    <Box className={style.socialButtons}>
                        <TreeSocialBtn />
                    </Box>
                </Box>

                {/* Декоративные элементы */}
                <Box className={style.toolsImage}>
                    <motion.img
                        src={pliers}
                        alt="Инструменты"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default CallBack1;