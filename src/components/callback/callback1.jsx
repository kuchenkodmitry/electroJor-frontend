import style from "./callback1.module.css";
import Typography from "@mui/material/Typography";
import ButtonGroup from "../buttons/SocialButtons/ButtonGroup";
import FlagImg from "./img/flag.png";
import pliers from "./img/pliers.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

function CallBack1() {
    const highlights = [
        'Консультация и расчёт бесплатно',
        'Поможем подобрать материалы и оборудование',
        'Работаем по договору и с гарантийными обязательствами'
    ];

    return (
        <Box
            className={style.callbackBlock}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Box className={style.contentWrapper}>
                <Box className={style.textBlock}>
                    <Typography
                        variant="h3"
                        className={style.title}
                        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
                    >
                        Нужна консультация или расчёт?
                    </Typography>

                    <Typography
                        variant="body1"
                        className={style.subtitle}
                    >
                        Выберите удобный способ связи — расскажем о сроках, стоимости и предложим оптимальное решение для вашего объекта.
                    </Typography>

                    <ul className={style.highlightList}>
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <Box className={style.socialPanel}>
                        <Box className={style.socialHeader}>
                            <img src={FlagImg} alt="Россия" />
                            <Typography variant="subtitle1">Связывайтесь напрямую с мастерами</Typography>
                        </Box>
                        <Typography variant="body2" className={style.socialText}>
                            Наши специалисты доступны в мессенджерах и по телефону ежедневно с 8:00 до 22:00.
                        </Typography>
                        <Box className={style.socialButtons}>
                            <ButtonGroup />
                        </Box>
                    </Box>

                    <Box className={style.decorativeNote}>
                        <Typography variant="subtitle2">
                            Или напишите нам в соцсетях — ответим в среднем за 5 минут.
                        </Typography>
                    </Box>
                </Box>

                {/* Декоративные элементы */}
                <Box className={style.toolsImage}>
                    <motion.img
                        src={pliers}
                        alt="Инструменты"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default CallBack1;