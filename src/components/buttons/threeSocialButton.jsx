import {WhatsAppBtn, TelegramBtn, PhoneBtn} from './socialBtn'
import s from './styleBtn.module.css'

export default function ThreeBtn(style) {
    return (
        <div style={style.style} className={s.threeBtn}>
        <WhatsAppBtn/>
        <TelegramBtn/>
        <PhoneBtn/>
        </div>
    )
}