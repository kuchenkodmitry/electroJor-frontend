
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
    return (
        <footer className={styles.footerContainer}>
            {/* Верхняя часть футера */}
            <Box className={styles.topSection}>
                <Box className={styles.logoColumn}>
                    <Box className={styles.logoWrapper}>
                        <img src={Logo} alt="ЭлектроТочка-34" className={styles.logo} />
                        <div>
                            <Typography variant="h2" className={styles.brandName}>
                                ЭлектроТочка-34
                            </Typography>
                            <Typography variant="subtitle2" className={styles.tagline}>
                                Профессиональные электромонтажные решения
                            </Typography>
                        </div>
                    </Box>
                    <Box className={styles.socialIcons}>
                        <a href={`https://wa.me/${phoneDigits(phone)}`} className={styles.socialLink}>
                            <WhatsApp className={styles.icon} />
                        </a>
                        <a href={`https://t.me/+${phoneDigits(phone)}`} className={styles.socialLink}>
                            <Telegram className={styles.icon} />
                        </a>
                    </Box>
                </Box>

                <Box className={styles.contactsColumn}>
                    <Typography variant="h6" className={styles.sectionTitle}>Контакты</Typography>
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

                <Box className={styles.hoursColumn}>
                    <Typography variant="h6" className={styles.sectionTitle}>Режим работы</Typography>
                    <Box className={styles.contactItem}>
                        <AccessTime className={styles.contactIcon} />
                        <Box>
                            <Typography className={styles.contactText}>Пн-Пт: 8:00-20:00</Typography>
                            <Typography className={styles.contactText}>Сб-Вс: 9:00-18:00</Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        className={styles.callButton}
                        href={`tel:${phoneDigits(phone)}`}
                        startIcon={<Phone />}
                    >
                        Связаться с нами
                    </Button>
                </Box>
            </Box>

            {/* Нижняя часть футера */}
            <Box className={styles.bottomSection}>
                <Typography className={styles.copyright}>
                    <Phone fontSize="small" sx={{ opacity: 0.8 }} /> {new Date().getFullYear()} ЭлектроТочка-34. Все права защищены.
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;