import {WhatsAppBtn, TelegramBtn, PhoneBtn} from './socialBtn'
import s from './styleBtn.module.css'

export default function ThreeBtn() {
    return (
        <div className={s.threeBtn}>
        <WhatsAppBtn/>
        <TelegramBtn/>
        <PhoneBtn/>
        </div>
    )
}