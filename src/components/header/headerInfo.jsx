import s from "./InfoHeader.module.css"
import { Typography, useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import RussianFlagIco from "./img/RussianFlag.png"
import BuilderIco from "./img/builder.png"
import LikeIco from "./img/like.png"
import ClockIco from "./img/clock.png"
import WhatsAppIco from '../buttons/SocialButtons/icons/whatsapp.png'
import TelegramIco from '../buttons/SocialButtons/icons/telegram.png'
import PhoneIco from '../buttons/SocialButtons/icons/phone.png'
import { useForm } from "react-hook-form";
import vkIco from "./img/download.png"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import { useSelector } from "react-redux";
import { phoneDigits, maskPhoneInput } from "../../utils/phone";
import axios from "../../axios/axios";


function InfoHeader() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const phone = useSelector((state) => state.settings.phone);
    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };
    async function onSubmit(data) {
        try {
            await axios.post('/feedback', data);
            alert('Заявка отправлена');
        } catch (e) {
            alert('Ошибка отправки');
        }
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className={s.main}>
            {/* Верхняя панель с меню */}
            <div className={s.topBar}>
                <div className={s.logoContainer}>
                    <img src={logo} alt="ЭлектроЖор" className={s.logo} />
                    <div className={s.logoText}>
                        <Typography variant="h6" className={s.logoTitle}>ЭлектроЖор</Typography>
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
                            ЭлектроЖор
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

                {/* Правый блок - форма и контакты */}
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
                            Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)} className={s.formSend}>
                            <div className={s.inputGroup}>
                                <div className={s.inputContainer}>
                                    <label className={s.inputLabel}>Ваше имя</label>
                                    <input
                                        placeholder="Иван Иванов"
                                        className={s.nameInput}
                                        type="text"
                                        {...register('name', {
                                            required: "Введите ваше имя",
                                            minLength: {
                                                value: 2,
                                                message: "Минимум 2 символа"
                                            }
                                        })}
                                        aria-invalid={errors.name ? "true" : "false"}
                                    />
                                    {errors.name && <p className={s.errorMessage}>{errors.name.message}</p>}
                                </div>

                                <div className={s.inputContainer}>
                                    <label className={s.inputLabel}>Номер телефона</label>
                                    <div className={s.phoneInputContainer}>
                                        <img src={RussianFlagIco} alt="Россия" className={s.flagIcon} />
                                        <input
                                            placeholder="+7 (___) ___-__-__"
                                            className={s.phoneInput}
                                            type="tel"
                                            {...register('phone', {
                                                required: "Введите номер телефона",
                                                pattern: {
                                                    value: /\d+/,
                                                    message: "Только цифры"
                                                },
                                                minLength: {
                                                    value: 10,
                                                    message: "Минимум 10 цифр"
                                                },
                                                onChange: (e) => {
                                                    e.target.value = maskPhoneInput(e.target.value);
                                                },
                                            })}
                                            aria-invalid={errors.phone ? "true" : "false"}
                                        />
                                    </div>
                                    {errors.phone && <p className={s.errorMessage}>{errors.phone.message}</p>}
                                </div>

                                <motion.button
                                    type="submit"
                                    className={s.buttonSend}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Позвоните мне
                                </motion.button>
                            </div>
                        </form>

                        <div className={s.contacts}>
                            <Typography variant="body1" className={s.contactsTitle}>
                                Или свяжитесь с нами:
                            </Typography>
                            <div className={s.socialLinks}>
                                <motion.a
                                    href={`https://t.me/+${phoneDigits(phone)}`}
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    className={s.socialLink}
                                >
                                    <img src={TelegramIco} alt="Telegram" />
                                    <span>Telegram</span>
                                </motion.a>
                                <motion.a
                                    href={`https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`}
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    className={s.socialLink}
                                >
                                    <img src={WhatsAppIco} alt="WhatsApp" />
                                    <span>WhatsApp</span>
                                </motion.a>
                                <motion.a
                                    href={`tel:+${phoneDigits(phone)}`}
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    className={s.socialLink}
                                >
                                    <img src={PhoneIco} alt="Телефон" />
                                    <span>{phone}</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default InfoHeader;