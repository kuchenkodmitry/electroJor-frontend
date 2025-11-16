import ElectricWorkerImg from "./img/ElectricWorker.png";
import Text from "@mui/material/Typography";
import styled from "./callback.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonGroup from "../buttons/SocialButtons/ButtonGroup";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";

function CallBackBottom() {
    const [isVisible, setIsVisible] = useState(false);
    const phone = useSelector((state) => state.settings.phone);
    const phoneNumber = phoneDigits(phone);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const contactOptions = [
        {
            title: "Позвонить",
            description: "Ответим на любые вопросы и согласуем выезд",
            href: `tel:+${phoneNumber}`,
        },
        {
            title: "Telegram",
            description: "Отправьте фото объекта и получите расчёт",
            href: `https://t.me/+${phoneNumber}`,
        },
        {
            title: "WhatsApp",
            description: "Удобно для голосовых сообщений и документов",
            href: `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text&type=phone_number&app_absent=0`,
        },
    ];

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
                    <img src={ElectricWorkerImg} alt="Electric Worker" className={styled.builderImg} />
                </motion.div>
                <div className={styled.callBackFortm}>
                    <motion.h3
                        className={styled.callBackPart}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Остались вопросы? Выберите удобный способ связи!
                    </motion.h3>
                    <motion.div
                        className={styled.contactGrid}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {contactOptions.map((option) => (
                            <a
                                key={option.title}
                                href={option.href}
                                target="_blank"
                                rel="noreferrer"
                                className={styled.contactCard}
                            >
                                <Text variant="h6" className={styled.contactCardTitle}>
                                    {option.title}
                                </Text>
                                <p className={styled.contactCardDescription}>{option.description}</p>
                                <span className={styled.contactCardAction}>Связаться</span>
                            </a>
                        ))}
                    </motion.div>

                    <motion.div
                        className={styled.messengerPanel}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className={styled.messengerHint}>Мы отвечаем даже вечером и в выходные — жмите на кнопку</p>
                        <ButtonGroup />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default CallBackBottom;
