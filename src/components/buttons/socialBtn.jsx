import s from '../buttons/styleBtn.module.css';
import WhatsAppIco from './img/WhatsAppIcon.png';
import TelegramIco from './img/TelegramIcon.png';
import PhoneIco from './img/PhoneIcon.png';
import { useSelector } from 'react-redux';
import { phoneDigits } from '../../utils/phone';

export function WhatsAppBtn() {
    const phone = useSelector((state) => state.settings.phone);
    const LinkWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`);
        }
    return (
        <div onClick={LinkWhatsApp} className={s.whatsapp}>
            <img width={'38'} height={"38"} src={WhatsAppIco} alt="" />
            <p>
                Написать в What’s App
            </p>
        </div>
    )
}
export function TelegramBtn() {
    const phone = useSelector((state) => state.settings.phone);
    const LinkTelegram = () => {
        window.open(`https://t.me/+${phoneDigits(phone)}`);
        }
    return (
        <div onClick={LinkTelegram} className={s.telegram}>
            <img width={'38'} height={"38"} src={TelegramIco} alt="" />
            <p>Написать в Telegram</p>
        </div>
    )
}
export function PhoneBtn() {
    const phone = useSelector((state) => state.settings.phone);
    return (
        <a href={`tel:+${phoneDigits(phone)}`} style={{textDecoration: "none"}} className={s.phone}>
            <img width={'38'} height={"38"} src={PhoneIco} alt="" />
            <p> Позвонить нам </p>
        </a>
    )
}