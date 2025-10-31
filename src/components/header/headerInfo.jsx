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

function InfoHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const phone = useSelector((state) => state.settings.phone);

    const navItems = [
        { label: "Услуги", href: "#uslugi" },
        { label: "О компании", href: "#about" },
        { label: "Наши работы", href: "#works" },
        { label: "Отзывы", href: "#reviews" },
        { label: "Контакты", href: "#footer" }
    ];

    const expertiseHighlights = [
        "Сопровождаем проект от идеи до сдачи объекта",
        "Работаем строго по ПУЭ и ГОСТ, фиксируем смету в договоре",
        "Современные решения по энергосбережению и автоматизации",
        "Собственный склад материалов — выезд и монтаж без задержек"
    ];

    const performanceMetrics = [
        { label: "лет в профессии", value: "12+" },
        { label: "завершённых объектов", value: "480" },
        { label: "средний срок выезда", value: "24 ч" }
    ];

    const digits = phone ? phoneDigits(phone) : "";
    const displayedPhone = phone || "+7 (8442) 00-00-00";

    const contactCards = [
        {
            icon: TelegramIco,
            label: "Telegram",
            description: "Экспертные ответы и обсуждение проекта в защищённом чате",
            href: digits ? `https://t.me/+${digits}` : "#"
        },
        {
            icon: WhatsAppIco,
            label: "WhatsApp",
            description: "Оперативный обмен схемами, фото и сметами без визита в офис",
            href: digits
                ? `https://api.whatsapp.com/send/?phone=%2B${digits}&text&type=phone_number&app_absent=0`
                : "#"
        },
        {
            icon: PhoneIco,
            label: "Прямая линия",
            description: "Соединение с ведущим инженером для консультации и выезда",
            href: digits ? `tel:+${digits}` : "#"
        }
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <section className={s.section}>
            <span className={s.glowOne} aria-hidden="true" />
            <span className={s.glowTwo} aria-hidden="true" />
            <div className={s.main}>
                <div className={s.topBar}>
                    <div className={s.logoContainer}>
                        <motion.img
                            src={logo}
                            alt="ЭлектроТочка34"
                            className={s.logo}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className={s.logoText}>
                            <Typography variant="h6" className={s.logoTitle}>
                                ЭлектроТочка 34
                            </Typography>
                            <Typography variant="caption" className={s.logoSubtitle}>
                                Электромонтаж полного цикла
                            </Typography>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className={s.navMenu}>
                            {navItems.map(({ label, href }) => (
                                <a key={label} href={href} className={s.navLink}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className={s.topBarActions}>
                        {!isMobile && (
                            <a href={digits ? `tel:+${digits}` : "#"} className={s.callLink}>
                                <span className={s.callLabel}>Консультация</span>
                                <span className={s.callPhone}>{displayedPhone}</span>
                            </a>
                        )}
                        {!isMobile && (
                            <Link to="/admin" className={s.adminLink}>
                                Кабинет
                            </Link>
                        )}
                        {isMobile && (
                            <button className={s.mobileMenuButton} onClick={toggleMobileMenu}>
                                <span className={s.menuIcon} />
                                <span className={s.menuIcon} />
                                <span className={s.menuIcon} />
                            </button>
                        )}
                    </div>
                </div>

                <AnimatePresence>
                    {isMobile && mobileMenuOpen && (
                        <motion.div
                            className={s.mobileMenu}
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25 }}
                        >
                            {navItems.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={s.mobileNavLink}
                                    onClick={handleMobileMenuClose}
                                >
                                    {label}
                                </a>
                            ))}
                            <Link to="/admin" className={s.mobileNavLink} onClick={handleMobileMenuClose}>
                                Админ панель
                            </Link>
                            <a
                                href={digits ? `tel:+${digits}` : "#"}
                                className={s.mobilePhoneLink}
                                onClick={handleMobileMenuClose}
                            >
                                {`Позвонить: ${displayedPhone}`}
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={s.heroLayout}>
                    <motion.div
                        className={s.heroContent}
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <motion.div
                            className={s.heroBadge}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span>Электротехнический инжиниринг класса Pro</span>
                        </motion.div>

                        <Typography variant="h3" className={s.heroTitle}>
                            Надёжные электромонтажные решения для бизнеса и частных объектов
                        </Typography>

                        <Typography variant="body1" className={s.heroDescription}>
                            Проектируем, монтируем и обслуживаем электросети любой сложности — от квартир и
                            коттеджей до коммерческих площадок. Привозим материалы, документируем каждое
                            подключение и отвечаем за результат.
                        </Typography>

                        <ul className={s.highlightList}>
                            {expertiseHighlights.map((item) => (
                                <li key={item} className={s.highlightItem}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className={s.ctaGroup}>
                            <motion.a
                                href={digits ? `tel:+${digits}` : "#"}
                                className={s.primaryCta}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Связаться с инженером
                            </motion.a>
                            <motion.a
                                href="#uslugi"
                                className={s.secondaryCta}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Каталог услуг
                            </motion.a>
                        </div>

                        <div className={s.statsGrid}>
                            {performanceMetrics.map(({ label, value }) => (
                                <motion.div
                                    key={label}
                                    className={s.statItem}
                                    whileHover={{ translateY: -4 }}
                                >
                                    <span className={s.statValue}>{value}</span>
                                    <span className={s.statLabel}>{label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className={s.advantages}>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}>
                                    <img src={BuilderIco} alt="Опытные мастера" />
                                </div>
                                <span>Команда аттестованных специалистов</span>
                            </div>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}>
                                    <img src={LikeIco} alt="Качество" />
                                </div>
                                <span>Гарантия на работы до 5 лет</span>
                            </div>
                            <div className={s.advantageItem}>
                                <div className={s.advantageIcon}>
                                    <img src={ClockIco} alt="Сроки" />
                                </div>
                                <span>Пусконаладка точно в срок</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={s.heroAside}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            className={s.contactPanel}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Typography variant="h5" className={s.panelTitle}>
                                Мы всегда на связи
                            </Typography>
                            <Typography variant="body2" className={s.panelSubtitle}>
                                Выберите удобный канал — ведущий инженер подключится, уточнит задачу и подготовит
                                смету в течение часа.
                            </Typography>

                            <div className={s.contactCards}>
                                {contactCards.map(({ icon, label, description, href }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.contactCard}
                                        whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(37, 99, 235, 0.25)" }}
                                        whileTap={{ scale: 0.99 }}
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
                                    Работаем ежедневно с 8:00 до 22:00. Выезжаем по Волгограду, области и на крупные
                                    строящиеся объекты.
                                </Typography>
                                <span className={s.scheduleTag}>Дежурная бригада 24/7</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className={s.floatingCard}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p>Проведём энергоаудит и подготовим рекомендации по снижению затрат.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default InfoHeader;
