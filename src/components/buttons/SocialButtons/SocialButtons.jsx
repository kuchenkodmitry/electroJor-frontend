// Социальные кнопки (WhatsApp, Telegram, Phone)
import styles from './SocialButtons.module.css';
import WhatsAppIcon from './icons/whatsapp.png';
import TelegramIcon from './icons/telegram.png';
import PhoneIcon from './icons/phone.png';
import { useSelector } from 'react-redux';
import { phoneDigits } from '../../../utils/phone';

export function WhatsAppBtn() {
  const phone = useSelector(state => state.settings.phone);
  const openWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send/?phone=%2B${phoneDigits(phone)}&text&type=phone_number&app_absent=0`);
  };
  return (
    <button onClick={openWhatsApp} className={`${styles.button}`} style={{ '--accent-color': '#32B857' }}>
      <img src={WhatsAppIcon} alt="WhatsApp" />
      <p>Написать в What's App</p>
    </button>
  );
}

export function TelegramBtn() {
  const phone = useSelector(state => state.settings.phone);
  const openTelegram = () => {
    window.open(`https://t.me/+${phoneDigits(phone)}`);
  };
  return (
    <button onClick={openTelegram} className={styles.button} style={{ '--accent-color': '#28A7E8' }}>
      <img src={TelegramIcon} alt="Telegram" />
      <p>Написать в Telegram</p>
    </button>
  );
}

export function PhoneBtn() {
  const phone = useSelector(state => state.settings.phone);
  return (
    <a href={`tel:+${phoneDigits(phone)}`} style={{ textDecoration: 'none' }}>
      <button className={styles.button} style={{ '--accent-color': '#000' }}>
        <img src={PhoneIcon} alt="Phone" />
        <p>Позвонить нам</p>
      </button>
    </a>
  );
}
