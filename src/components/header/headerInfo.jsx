import s from "./InfoHeader.module.css"
import { Typography, useMediaQuery } from "@mui/material";
import BuilderIco from "./img/builder.png";
import LikeIco from "./img/like.png";
import ClockIco from "./img/clock.png";
import WhatsAppIco from '../buttons/SocialButtons/icons/whatsapp.png';
import TelegramIco from '../buttons/SocialButtons/icons/telegram.png';
import PhoneIco from '../buttons/SocialButtons/icons/phone.png';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";


function InfoHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const phone = useSelector((state) => state.settings.phone);
    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const contactCards = [
        {
            icon: TelegramIco,
            label: 'Telegram',
            description: 'Быстрые ответы и консультации в мессенджере',
            href: `https://t.me/+${phoneDigits(phone)}`
        },
        {
            icon: WhatsAppIco,
            label: 'WhatsApp',
            description: 'Фото работ, сметы и подробности прямо в чате',
            href: `https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`
        },
        {
            icon: PhoneIco,
            label: 'Позвонить',
            description: 'Свяжитесь напрямую с мастером и обсудите задачу',
            href: `tel:+${phoneDigits(phone)}`
        }
    ];

    return (
        <div className={s.main}>
            {/* Верхняя панель с меню */}
            <div className={s.topBar}>
                <div className={s.logoContainer}>
                    <img src={logo} alt="ЭлектроТочка34" className={s.logo} />
                    <div className={s.logoText}>
                        <Typography variant="h6" className={s.logoTitle}>ЭлектроТочка 34</Typography>
                        <Typography variant="caption" className={s.logoSubtitle}>Электромонтажные работы</Typography>
                    </div>
                </div>

                {!isMobile ? (
                    <nav className={s.navMenu}>
                        <a href="#uslugi" className={s.navLink}>Услуги</a>
                        <a href="#about" className={s.navLink}>О компании</a>
                        <a href="#works" className={s.navLink}>Наши работы</a>
                        <a href="#footer" className={s.navLink}>Контакты</a>
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
                        <Typography variant="body1" className={s.phoneNumber}>{phone}</Typography>
                        <a href={`tel:+${phoneDigits(phone)}`} className={s.phoneLink}>Позвонить по телефону</a>
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
                            position: 'fixed',
                            top: '70px', // Высота вашего хедера
                            left: 0,
                            right: 0,
                            zIndex: 1000
                        }}
                    >
                        <a href="#uslugi" className={s.mobileNavLink} onClick={handleMobileMenuClose}>Услуги</a>
                        <a href="#about" className={s.mobileNavLink} onClick={handleMobileMenuClose}>О компании</a>
                        <a href="#works" className={s.mobileNavLink} onClick={handleMobileMenuClose}>Наши работы</a>
                        <a href="#footer" className={s.mobileNavLink} onClick={handleMobileMenuClose}>Контакты</a>
                        <Link to="/admin" className={s.mobileNavLink} onClick={handleMobileMenuClose}>Админ панель</Link>
                        <a href={`tel:+${phoneDigits(phone)}`} className={s.mobilePhoneLink} onClick={handleMobileMenuClose}>Позвонить: {phone}</a>
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
                                <div className={s.advantageIcon}><img src={BuilderIco} alt="Профессионалы" /></div>
                                <span>Опытные мастера</span>
                            </div>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}><img src={LikeIco} alt="Качество" /></div>
                                <span>Гарантия качества</span>
                            </div>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}><img src={ClockIco} alt="Сроки" /></div>
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
                    <div className={s.contactPanel}>
                        <Typography variant="h5" className={s.panelTitle}>
                            Мы всегда на связи
                        </Typography>
                        <Typography variant="body2" className={s.panelSubtitle}>
                            Выберите удобный способ общения — специалист ответит в течение нескольких минут.
                        </Typography>

                        <div className={s.contactCards}>
                            {contactCards.map(({ icon, label, description, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={s.contactCard}
                                    whileHover={{ y: -6 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className={s.cardIcon}>
                                        <img src={icon} alt={label} />
                                    </div>
                                    <div className={s.cardContent}>
                                        <Typography variant="subtitle1" className={s.cardTitle}>
                                            {label}
                                        </Typography>
                                        <Typography variant="body2" className={s.cardDescription}>
                                            {description}
                                        </Typography>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className={s.infoBanner}>
                            <Typography variant="subtitle2">
                                Работаем ежедневно с 8:00 до 22:00 — приезжаем день в день по Волгограду и области.
                            </Typography>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default InfoHeader;