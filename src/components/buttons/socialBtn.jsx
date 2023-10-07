import s from '../buttons/styleBtn.module.css'
import WhatsAppIco from './img/WhatsAppIcon.png'
import TelegramIco from './img/TelegramIcon.png'
import PhoneIco from './img/PhoneIcon.png'

export function WhatsAppBtn() {
    return (
        <div className={s.whatsapp}>
            <img width={'38'} height={"38"} src={WhatsAppIco} alt="" />
            <p>
                Написать в What’s App
            </p>
        </div>
    )
}
export function TelegramBtn() {
    return (
        <div className={s.telegram}>
            <img width={'38'} height={"38"} src={TelegramIco} alt="" />
            <p>Написать в Telegram</p>
        </div>
    )
}
export function PhoneBtn() {
    return (
        <div className={s.phone}>
            <img width={'38'} height={"38"} src={PhoneIco} alt="" />
            <p> Позвонить нам </p>
        </div>
    )
}