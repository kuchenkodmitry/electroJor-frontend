import s from "./InfoHeader.module.css";
import { Typography, useMediaQuery } from "@mui/material";
import BuilderIco from "./img/builder.png";
import LikeIco from "./img/like.png";
import ClockIco from "./img/clock.png";
import WhatsAppIco from "../buttons/SocialButtons/icons/whatsapp.png";
import TelegramIco from "../buttons/SocialButtons/icons/telegram.png";
import PhoneIco from "../buttons/SocialButtons/icons/phone.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";
import ButtonGroup from "../buttons/SocialButtons/ButtonGroup";

function InfoHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const phone = useSelector((state) => state.settings.phone);
    const phoneNumber = phoneDigits(phone);

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const contactOptions = [
        {
            icon: TelegramIco,
            title: "Telegram",
            description: "Быстрые ответы в чате",
            href: `https://t.me/+${phoneNumber}`,
        },
        {
            icon: WhatsAppIco,
            title: "WhatsApp",
            description: "Уточнить детали заказа",
            href: `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text&type=phone_number&app_absent=0`,
        },
        {
            icon: PhoneIco,
            title: "Позвонить",
            description: "Связаться напрямую с мастером",
            href: `tel:+${phoneNumber}`,
        },
    ];

    return (
        <div className={s.main}>
            {/* Верхняя панель с меню */}
            <div className={s.topBar}>
                <div className={s.logoContainer}>
                    <img src={logo} alt="ЭлектроТочка34" className={s.logo} />
                    <div className={s.logoText}>
                        <Typography variant="h6" className={s.logoTitle}>
                            ЭлектроТочка 34
                        </Typography>
                        <Typography variant="caption" className={s.logoSubtitle}>
                            Электромонтажные работы
                        </Typography>
                    </div>
                </div>

                {!isMobile ? (
                    <nav className={s.navMenu}>
                        <a href="#uslugi" className={s.navLink}>
                            Услуги
                        </a>
                        <a href="#about" className={s.navLink}>
                            О компании
                        </a>
                        <a href="#works" className={s.navLink}>
                            Наши работы
                        </a>
                        <a href="#footer" className={s.navLink}>
                            Контакты
                        </a>
                    </nav>
                ) : (
                    <button className={s.mobileMenuButton} onClick={toggleMobileMenu}>
                        <span className={s.menuIcon}></span>
                        <span className={s.menuIcon}></span>
                        <span className={s.menuIcon}></span>
                    </button>
                )}

                {!isMobile && (
                    <div className={s.phoneBlock}>
                        <Typography variant="body1" className={s.phoneNumber}>
                            {phone}
                        </Typography>
                        <a href={`tel:+${phoneNumber}`} className={s.phoneLink}>
                            Позвонить по телефону
                        </a>
                    </div>
                )}
            </div>

            {/* Мобильное меню */}
            <AnimatePresence>
                {isMobile && mobileMenuOpen && (
                    <motion.div
                        className={s.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: "fixed",
                            top: "70px",
                            left: 0,
                            right: 0,
                            zIndex: 1000,
                        }}
                    >
                        <a href="#uslugi" className={s.mobileNavLink} onClick={handleMobileMenuClose}>
                            Услуги
                        </a>
                        <a href="#about" className={s.mobileNavLink} onClick={handleMobileMenuClose}>
                            О компании
                        </a>
                        <a href="#works" className={s.mobileNavLink} onClick={handleMobileMenuClose}>
                            Наши работы
                        </a>
                        <a href="#footer" className={s.mobileNavLink} onClick={handleMobileMenuClose}>
                            Контакты
                        </a>
                        <Link to="/admin" className={s.mobileNavLink} onClick={handleMobileMenuClose}>
                            Админ панель
                        </Link>
                        <a href={`tel:+${phoneNumber}`} className={s.mobilePhoneLink} onClick={handleMobileMenuClose}>
                            Позвонить: {phone}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={s.contentWrapper}>
                {/* Левый блок - информация о компании */}
                <motion.div
                    className={s.leftBlock}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={s.leftBlockContent}>
                        <Typography variant="h4" className={s.leftBlockTitle}>
                            ЭлектроТочка 34
                        </Typography>
                        <Typography variant="subtitle1" className={s.leftBlockSubtitle}>
                            Профессиональные электромонтажные работы
                        </Typography>

                        <ul className={s.featuresList}>
                            <li>Монтаж и замена электропроводки</li>
                            <li>Установка щитков и автоматов</li>
                            <li>Ремонт и обслуживание</li>
                            <li>Сборка электрощитов</li>
                            <li>Наружное освещение</li>
                        </ul>

                        <div className={s.advantages}>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}>
                                    <img src={BuilderIco} alt="Профессионалы" />
                                </div>
                                <span>Опытные мастера</span>
                            </div>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}>
                                    <img src={LikeIco} alt="Качество" />
                                </div>
                                <span>Гарантия качества</span>
                            </div>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}>
                                    <img src={ClockIco} alt="Сроки" />
                                </div>
                                <span>Соблюдение сроков</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Правый блок - контакты */}
                <motion.div
                    className={s.rightBlock}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={s.contactForm}>
                        <Typography variant="h5" className={s.formTitle}>
                            Бесплатная консультация
                        </Typography>
                        <Typography variant="body2" className={s.formSubtitle}>
                            Выберите удобный способ связи и получите расчёт стоимости в течение 15 минут
                        </Typography>

                        <div className={s.contactActions}>
                            {contactOptions.map((option) => (
                                <motion.a
                                    key={option.title}
                                    href={option.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={s.contactCard}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={s.contactCardIcon}>
                                        <img src={option.icon} alt={option.title} />
                                    </div>
                                    <div className={s.contactCardText}>
                                        <span className={s.contactCardTitle}>{option.title}</span>
                                        <span className={s.contactCardDescription}>{option.description}</span>
                                    </div>
                                    <span className={s.contactCardAction}>Перейти</span>
                                </motion.a>
                            ))}
                        </div>

                        <div className={s.secondaryActions}>
                            <Typography variant="body2" className={s.secondaryHint}>
                                Всегда онлайн и готовы к диалогу
                            </Typography>
                            <ButtonGroup />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default InfoHeader;
