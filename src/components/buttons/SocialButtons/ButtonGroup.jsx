import { WhatsAppBtn, TelegramBtn, PhoneBtn } from './SocialButtons';
import styles from './SocialButtons.module.css';

export default function ButtonGroup({ style }) {
  return (
    <div style={style} className={styles.group}>
      <WhatsAppBtn />
      <TelegramBtn />
      <PhoneBtn />
    </div>
  );
}
