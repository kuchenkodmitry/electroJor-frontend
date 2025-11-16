import style from "./callback1.module.css";
import Typography from "@mui/material/Typography";
import ButtonGroup from "../buttons/SocialButtons/ButtonGroup";
import pliers from "./img/pliers.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";

function CallBack1() {
    const phone = useSelector((state) => state.settings.phone);
    const phoneNumber = phoneDigits(phone);

    const contactCards = [
        {
            title: "Позвонить мастеру",
            description: "Обсудим задачу и сориентируем по срокам",
            action: `tel:+${phoneNumber}`,
            accent: "#00ABE4",
        },
        {
            title: "Написать в Telegram",
            description: "Задайте вопрос и получите фото-проекты",
            action: `https://t.me/+${phoneNumber}`,
            accent: "#2AABEE",
        },
        {
            title: "Написать в WhatsApp",
            description: "Удобно отправлять чертежи и адрес",
            action: `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text&type=phone_number&app_absent=0`,
            accent: "#32B857",
        },
    ];

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
                    <Typography
                        variant="h3"
                        className={style.title}
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
                    >
                        Не нашли нужную услугу?
                    </Typography>

                    <Typography variant="body1" className={style.subtitle}>
                        Свяжитесь с нами — подскажем решение и подготовим смету в течение 15 минут
                    </Typography>

                    <Box className={style.ctaPanel}>
                        <Typography variant="subtitle1" className={style.ctaTitle}>
                            Выберите удобный способ связи
                        </Typography>
                        <div className={style.ctaCards}>
                            {contactCards.map((card) => (
                                <a
                                    key={card.title}
                                    href={card.action}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={style.ctaCard}
                                    style={{ borderColor: card.accent }}
                                >
                                    <span className={style.ctaBadge} style={{ background: card.accent }}></span>
                                    <div>
                                        <p className={style.ctaCardTitle}>{card.title}</p>
                                        <p className={style.ctaCardDescription}>{card.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <Typography variant="body2" className={style.supportText}>
                            Или воспользуйтесь любимым мессенджером — кнопки ниже всегда под рукой
                        </Typography>

                        <div className={style.socialButtons}>
                            <ButtonGroup />
                        </div>
                    </Box>
                </Box>

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
    );
}

export default CallBack1;
