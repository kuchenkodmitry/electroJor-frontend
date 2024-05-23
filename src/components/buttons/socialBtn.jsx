import s from '../buttons/styleBtn.module.css'
import WhatsAppIco from './img/WhatsAppIcon.png'
import TelegramIco from './img/TelegramIcon.png'
import PhoneIco from './img/PhoneIcon.png'

export function WhatsAppBtn() {
    const LinkWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=%2B79093839946&text&type=phone_number&app_absent=0 ');
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
    const LinkTelegram = () => {
        window.open('https://t.me/+79093839946');
        }
    return (
        <div onClick={LinkTelegram} className={s.telegram}>
            <img width={'38'} height={"38"} src={TelegramIco} alt="" />
            <p>Написать в Telegram</p>
        </div>
    )
}
export function PhoneBtn() {
    return (
        <a href='tel:+79093839946' style={{textDecoration: "none"}} className={s.phone}>
            <img width={'38'} height={"38"} src={PhoneIco} alt="" />
            <p> Позвонить нам </p>
        </a>
    )
}