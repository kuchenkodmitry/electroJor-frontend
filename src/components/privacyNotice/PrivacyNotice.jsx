import { useEffect, useState } from "react";
import styles from "./PrivacyNotice.module.css";

const STORAGE_KEY = "et34-privacy-notice";

function PrivacyNotice() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const alreadySeen = localStorage.getItem(STORAGE_KEY);
            if (!alreadySeen) {
                setVisible(true);
            }
        } catch (error) {
            setVisible(true);
        }
    }, []);

    const handleClose = () => {
        try {
            localStorage.setItem(STORAGE_KEY, "true");
        } catch (error) {
            // ignore write errors
        }
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <div className={styles.notice}>
            <p className={styles.message}>Сайт не собирает данные пользователей. Все обращения проходят напрямую без хранения персональной информации.</p>
            <button type="button" className={styles.closeButton} onClick={handleClose}>
                Понятно
            </button>
        </div>
    );
}

export default PrivacyNotice;
