import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PrivacyNotice.module.css";

const STORAGE_KEY = "electro_privacy_notice_shown";

function PrivacyNotice() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        try {
            const alreadyShown = window.localStorage.getItem(STORAGE_KEY);
            if (!alreadyShown) {
                setVisible(true);
                window.localStorage.setItem(STORAGE_KEY, "true");
            }
        } catch (e) {
            setVisible(true);
        }
    }, []);

    const handleClose = useCallback(() => {
        setVisible(false);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className={styles.notice}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Мы ценим вашу приватность</h3>
                        <p>
                            Сайт работает без сбора персональных данных. Ваши обращения в мессенджерах защищены политиками
                            конфиденциальности выбранных сервисов.
                        </p>
                        <button onClick={handleClose} type="button">Понятно</button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PrivacyNotice;
