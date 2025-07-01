import styled from "./footer.module.css";
import Text from "@mui/material/Typography";
import logo from "./images/logo.png";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { phoneDigits } from "../../utils/phone";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
// import { ReactComponent as VkIcon } from './icons/vk.svg';

function Footer() {
    const phone = useSelector((state) => state.settings.phone);
    return (
        <div id="footer" className={styled.footerFlex}>
            <Box sx={{
                display: { xs: "flex", md: "none" }
            }}>
                <Text sx={{
                    fontSize: 28,
                    margin: '0 auto',
                    padding: '20px 0 10px',
                    letterSpacing: 5,
                    fontWeight: 500
                }}>
                    Контакты
                </Text>
            </Box>
            <Box sx={{
                display: { xs: "none", md: "flex" },
                width: "900px",
                justifyContent: "space-around"
            }}>
                <div className={styled.logoWithSocial}>
                    <div className={styled.logoContent}>
                        <img src={logo} alt="logo" />
                        <div className={styled.logoText}>
                            <Text sx={{
                                fontWeight: 500,
                                fontSize: "24px",
                                fontFamily: "Poppins",
                                fontStretch: "expanded",
                                letterSpacing: "2px"
                            }}>ЭлектроЖор</Text>
                            <Text sx={{
                                fontSize: "12px",
                                fontWeight: 550,
                                fontFamily: "Poppins"
                            }}>Электромонтажные работы</Text>
                        </div>
                    </div>
                    <Text sx={{ color: "#5C7A92", fontWeight: 700 }}>Электромонтажные работы любой сложности в городе Волгограде</Text>
                    <div className={styled.socialBtn}>
                        <a target="_blank" href={`https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`}>
                            <WhatsAppIcon style={{ color: '#90A4AF', fontSize: 23 }} />
                        </a>
                        <a href={`https://t.me/+${phoneDigits(phone)}`} target="_blank">
                            <TelegramIcon style={{ color: '#90A4AF', fontSize: 23 }} />
                        </a>
                        <a href="https://vk.com/elektriks34" target="_blank">
                            {/* <VkIcon style={{ width: 23, height: 23, fill: '#90A4AF' }} /> */}
                        </a>
                    </div>
                </div>
                <div className={styled.linkWorks}>
                    <a href="">Монтаж электроники</a>
                    <a href="">Замена электрики</a>
                    <a href="">Подключение электрики</a>
                    <a href="">Разводка электрики в квартире</a>
                    <a href="">Разводка электрики в частном доме</a>
                </div>
                <div className={styled.sections}>
                    <a href="">О компании</a>
                    <a href="">Работы</a>
                    <a href="">Отзывы</a>
                    <a href="">Контакты</a>
                </div>
            </Box>
            <div className={styled.footerInfo}>
                <div className={styled.footerInfoFlex}>
                    <PhoneIcon style={{ fontSize: 40, color: '#1C274C' }} />
                    <Text sx={{ fontWeight: 600, fontSize: "18px" }}>{phone}</Text>
                </div>
                <div className={styled.footerInfoFlex}>
                    <EmailIcon style={{ fontSize: 40, color: '#1C274C' }} />
                    <Text sx={{ fontWeight: 600, fontSize: "18px" }}>ElectroJor@yandex.ru</Text>
                </div>
                <div className={styled.footerInfoFlex}>
                    <LocationOnIcon style={{ fontSize: 40, color: '#1C274C' }} />
                    <div>
                        <Text sx={{ fontWeight: 600, fontSize: "18px" }}>Город Волгоград</Text>
                        <Text sx={{ fontWeight: 500, color: "rgba(0, 0, 0, 0.40)" }}>Работаем по всем районам</Text>
                    </div>
                </div>
                <div className={styled.footerInfoFlex}>
                    <AccessTimeIcon style={{ fontSize: 40, color: '#1C274C' }} />
                    <div>
                        <Text sx={{ fontWeight: 600, fontSize: "18px" }}>Время работы</Text>
                        <Text sx={{ fontWeight: 500, color: "rgba(0, 0, 0, 0.40)" }}>С 9:00 до 18:00 без выходных</Text>
                    </div>
                </div>
            </div>
            <Box sx={{
                display: { xs: "flex", md: "none" }
            }}>
                <div className={styled.socialBtn}>
                    <a href={`https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`} target="_blank">
                        <WhatsAppIcon style={{ color: '#90A4AF', fontSize: 23 }} />
                    </a>
                    <a href={`https://t.me/+${phoneDigits(phone)}`} target="_blank">
                        <TelegramIcon style={{ color: '#90A4AF', fontSize: 23 }} />
                    </a>
                    <a href="https://vk.com/elektriks34" target="_blank">
                        {/* <VkIcon style={{ width: 23, height: 23, fill: '#90A4AF' }} /> */}
                    </a>
                </div>
            </Box>
        </div>
    )
}

export default Footer;