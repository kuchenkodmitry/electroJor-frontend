// Социальные кнопки (WhatsAppBtn, TelegramBtn, PhoneBtn)
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
        <button onClick={LinkWhatsApp} className={`${s.socialBtn} ${s.whatsapp}`}>
            <img width={'38'} height={"38"} src={WhatsAppIco} alt="WhatsApp" />
            <p>Написать в What's App</p>
        </button>
    );
}

export function TelegramBtn() {
    const phone = useSelector((state) => state.settings.phone);
    const LinkTelegram = () => {
        window.open(`https://t.me/+${phoneDigits(phone)}`);
    }

    return (
        <button onClick={LinkTelegram} className={`${s.socialBtn} ${s.telegram}`}>
            <img width={'38'} height={"38"} src={TelegramIco} alt="Telegram" />
            <p>Написать в Telegram</p>
        </button>
    );
}

export function PhoneBtn() {
    const phone = useSelector((state) => state.settings.phone);

    return (
        <a href={`tel:+${phoneDigits(phone)}`} style={{ textDecoration: "none" }}>
            <button className={`${s.socialBtn} ${s.phone}`}>
                <img width={'38'} height={"38"} src={PhoneIco} alt="Phone" />
                <p>Позвонить нам</p>
            </button>
        </a>
    );
}