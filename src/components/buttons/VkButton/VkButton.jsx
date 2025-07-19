import logo from './vk-logo.png';
import styles from './VkButton.module.css';

function VkButton() {
  const openVk = () => {
    window.open('https://vk.com/elektriks34', '_blank');
  };

  return (
    <div onClick={openVk} className={styles.button}>
      <p className={styles.text}>Больше наших работ в группе</p>
      <img className={styles.logo} src={logo} alt="VK" />
    </div>
  );
}

export default VkButton;
