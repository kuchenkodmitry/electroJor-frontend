import ElectricWorkerImg from "./img/ElectricWorker.png";
import styled from "./callback.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";

function CallBackBottom() {
    const [isVisible, setIsVisible] = useState(false);
    const phone = useSelector((state) => state.settings.phone);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const contactOptions = [
        {
            title: 'Телефон',
            description: 'Обсудим задачу и сразу согласуем время выезда мастера.',
            href: `tel:+${phoneDigits(phone)}`,
            accent: '#ffb703'
        },
        {
            title: 'Telegram',
            description: 'Пришлите фото объекта — рассчитаем смету и материалы онлайн.',
            href: `https://t.me/+${phoneDigits(phone)}`,
            accent: '#1a8cff'
        },
        {
            title: 'WhatsApp',
            description: 'Отправим коммерческое предложение и ответим на вопросы.',
            href: `https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`,
            accent: '#1f9d55'
        }
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
                        Остались вопросы? Давайте обсудим проект удобным способом!
                    </motion.h3>
                    <motion.div
                        className={styled.callBackFroms}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className={styled.contactGrid}>
                            {contactOptions.map(({ title, description, href, accent }) => (
                                <motion.a
                                    key={title}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styled.contactTile}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{ '--accent-color': accent }}
                                >
                                    <span className={styled.tileTitle}>{title}</span>
                                    <span className={styled.tileDescription}>{description}</span>
                                </motion.a>
                            ))}
                        </div>
                        <p className={styled.consentText}>
                            Свяжитесь с нами любым удобным способом — персональные данные не требуются.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default CallBackBottom;