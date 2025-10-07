import styles from "./footer.module.css";
import { Typography, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";
import {
    Phone, Email, LocationOn, AccessTime,
    WhatsApp, Telegram
} from '@mui/icons-material';
import Logo from "./images/logo.png";

function Footer() {
    const phone = useSelector((state) => state.settings.phone);
    const formattedPhone = phoneDigits(phone);

    return (
        <footer className={styles.footerContainer}>
            {/* Верхняя часть */}
            <Box className={styles.topSection}>
                {/* Логотип + Соцсети */}
                <Box className={styles.logoColumn}>
                    <Box className={styles.logoWrapper}>
                        <img src={Logo} alt="ЭлектроТочка-34" className={styles.logo} />
                        <Box className={styles.brandWrapper}>
                            <Typography variant="h5" className={styles.brandName}>
                                ЭлектроТочка-34
                            </Typography>
                            <Typography variant="subtitle2" className={styles.tagline}>
                                Профессиональные электромонтажные решения
                            </Typography>
                        </Box>
                    </Box>
                    {/* <Box id={styles.mobileOFF} className={styles.socialIcons}>
                        <div className={styles.mobileOFF}>
                            <a href={`https://wa.me/${phoneDigits(phone)}`} className={styles.socialLink} aria-label="WhatsApp">
                                <WhatsApp className={styles.icon} />
                            </a>
                        </div>
                        <div className={styles.mobileOFF}>
                            <a href={`https://t.me/+${phoneDigits(phone)}`} className={styles.socialLink} aria-label="Telegram">
                                <Telegram className={styles.icon} />
                            </a>
                        </div>

                    </Box> */}
                </Box>

                {/* Контакты */}
                <Box className={styles.contactsColumn}>
                    <Typography variant="h6" className={styles.sectionTitle}>Контакты</Typography>
                    <Box className={styles.contactList}>
                        <Box className={styles.contactItem}>
                            <Phone className={styles.contactIcon} />
                            <Typography className={styles.contactText}>{phone}</Typography>
                        </Box>
                        <Box className={styles.contactItem}>
                            <Email className={styles.contactIcon} />
                            <Typography className={styles.contactText}>ElectroJor@yandex.ru</Typography>
                        </Box>
                        <Box className={styles.contactItem}>
                            <LocationOn className={styles.contactIcon} />
                            <Typography className={styles.contactText}>Волгоград и область</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Режим работы + Кнопка */}
                <Box className={styles.hoursColumn}>
                    <Typography variant="h6" className={styles.sectionTitle}>Работаем</Typography>
                    <Box className={styles.contactItem}>
                        <AccessTime className={styles.contactIcon} />
                        <Box className={styles.workingHours}>
                            <Typography className={styles.contactText}>Пн–Пт: 8:00–20:00</Typography>
                            <Typography className={styles.contactText}>Сб–Вс: 9:00–18:00</Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        className={styles.callButton}
                        href={`tel:${formattedPhone}`}
                        startIcon={<Phone className={styles.buttonIcon} />}
                    >
                        Связаться с нами
                    </Button>
                </Box>
            </Box>

            {/* Нижняя часть */}
            <Box className={styles.bottomSection}>
                <Typography className={styles.copyright}>
                    © {new Date().getFullYear()} ЭлектроТочка-34. Все права защищены.
                </Typography>
            </Box>
        </footer>
    );
}

export default Footer;