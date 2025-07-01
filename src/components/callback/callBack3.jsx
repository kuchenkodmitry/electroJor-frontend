import ElectricWorkerImg from "./img/ElectricWorker.png";
import Text from "@mui/material/Typography";
import styled from "./callback.module.css";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { maskPhoneInput } from "../../utils/phone";
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "../../axios/axios";

function CallBackBottom() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    async function onSubmit(data) {
        setIsLoading(true);
        try {
            await axios.post('/feedback', data);
            setSubmitSuccess(true);
        } catch (error) {
            alert("Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
        } finally {
            setIsLoading(false);
        }
    }

    if (submitSuccess) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                backgroundColor: 'rgba(49, 77, 180, 0.9)',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                margin: '120px auto 50px',
                maxWidth: '1200px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Text variant="h5" sx={{ fontWeight: 500, fontSize: '2rem' }}>
                        Спасибо! Мы получили вашу заявку и перезвоним вам в течение 20 минут.
                    </Text>
                </motion.div>
            </Box>
        );
    }

    return (
        <motion.div
            className={styled.backgoundCallBack}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className={styled.blur}>
                <motion.div
                    className={styled.imageContainer}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src={ElectricWorkerImg}
                        alt="Electric Worker"
                        className={styled.builderImg}
                    />
                </motion.div>
                <div className={styled.callBackFortm}>
                    <motion.h3
                        className={styled.callBackPart}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Остались вопросы? Перезвоним в течение 20 минут!
                    </motion.h3>
                    <motion.form
                        className={styled.callBackFroms}
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className={styled.flexInputs}>
                            <div className={styled.inputContent}>
                                <label className={styled.inputLabel}>Номер телефона*</label>
                                <input
                                    type="tel"
                                    {...register("phone", { required: true })}
                                    className={styled.inputField}
                                    placeholder="+7 (___) ___-__-__"
                                    onInput={maskPhoneInput}
                                />
                                {errors.phone && <span className={styled.error}>Обязательное поле</span>}
                            </div>
                            <div className={styled.inputContent}>
                                <label className={styled.inputLabel}>Ваше имя*</label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className={styled.inputField}
                                    placeholder="Иван Иванов"
                                />
                                {errors.name && <span className={styled.error}>Обязательное поле</span>}
                            </div>
                            <motion.button
                                className={styled.submitButton}
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <CircularProgress size={24} color="inherit" />
                                ) : (
                                    "Отправить!"
                                )}
                            </motion.button>
                        </div>
                        <p className={styled.consentText}>
                            Нажимая кнопку, вы даёте согласие на обработку ваших персональных данных.
                        </p>
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
}

export default CallBackBottom;