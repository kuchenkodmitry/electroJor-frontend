import styled from "./footer.module.css";
import { Typography, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";
import {
    Phone, Email, LocationOn, AccessTime,
    WhatsApp, Telegram, Instagram, Facebook,
    Copyright, Policy, Description
} from '@mui/icons-material';
import Logo from "./images/logo.png";

function Footer() {
    const phone = useSelector((state) => state.settings.phone);
    return (
        <footer className={styled.footerContainer}>
            {/* Верхняя часть футера */}
            <Box className={styled.topSection}>
                <Box className={styled.logoColumn}>
                    <Box className={styled.logoWrapper}>
                        <img src={Logo} alt="ЭлектроЖор" className={styled.logo} />
                        <div>
                            <Typography sx={{ fontSize: '24px' }} variant="h2" className={styled.brandName}>
                                ЭлектроЖор
                            </Typography>
                            <Typography variant="subtitle2" className={styled.tagline}>
                                Профессиональные электромонтажные решения
                            </Typography>
                        </div>
                    </Box>
                    <Box className={styled.socialIcons}>
                        <a href={`https://wa.me/${phoneDigits(phone)}`} className={styled.socialLink}>
                            <WhatsApp className={styled.icon} />
                        </a>
                        <a href={`https://t.me/+${phoneDigits(phone)}`} className={styled.socialLink}>
                            <Telegram className={styled.icon} />
                        </a>
                    </Box>
                </Box>

                <Box className={styled.contactsColumn}>
                    <Typography variant="h6" className={styled.sectionTitle}>Контакты</Typography>
                    <Box className={styled.contactItem}>
                        <Phone className={styled.contactIcon} />
                        <Typography className={styled.contactText}>{phone}</Typography>
                    </Box>
                    <Box className={styled.contactItem}>
                        <Email className={styled.contactIcon} />
                        <Typography className={styled.contactText}>ElectroJor@yandex.ru</Typography>
                    </Box>
                    <Box className={styled.contactItem}>
                        <LocationOn className={styled.contactIcon} />
                        <Typography className={styled.contactText}>Волгоград и область</Typography>
                    </Box>
                </Box>

                <Box className={styled.hoursColumn}>
                    <Typography variant="h6" className={styled.sectionTitle}>Режим работы</Typography>
                    <Box className={styled.contactItem}>
                        <AccessTime className={styled.contactIcon} />
                        <Box>
                            <Typography className={styled.contactText}>Пн-Пт: 8:00-20:00</Typography>
                            <Typography className={styled.contactText}>Сб-Вс: 9:00-18:00</Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        className={styled.callButton}
                        href={`tel:${phoneDigits(phone)}`}
                        startIcon={<Phone />}
                    >
                        Связаться с нами
                    </Button>
                </Box>
            </Box>

            {/* Нижняя часть футера */}
            <Box className={styled.bottomSection}>
                <Typography className={styled.copyright}>
                    <Copyright fontSize="small" /> {new Date().getFullYear()} Электрофор. Все права защищены.
                </Typography>
                <Box className={styled.links}>
                    <a href="#" className={styled.footerLink}>
                        <Policy fontSize="small" /> Политика конфиденциальности
                    </a>
                    <a href="#" className={styled.footerLink}>
                        <Description fontSize="small" /> Договор оферты
                    </a>
                </Box>
            </Box>
        </footer>
    )
}

export default Footer;