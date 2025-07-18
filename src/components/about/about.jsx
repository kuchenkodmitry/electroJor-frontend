import { useTheme, useMediaQuery, Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ElectricTeamImg from './img/electric.png';
import ToolsIco from './img/Wrench.png';

const BenefitCard = styled(motion.div)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '20px',
    },
}));

const benefits = [
    {
        title: "Опыт и профессионализм",
        description: "Бригада мастеров с многолетним стажем работы",
        icon: "🛠️",
    },
    {
        title: "Комплексные решения",
        description: "Полный цикл электромонтажных работ под ключ",
        icon: "🔌",
    },
    {
        title: "Качество и надежность",
        description: "Используем только сертифицированные материалы",
        icon: "🏆",
    },
    {
        title: "Четкие сроки",
        description: "Соблюдаем договоренности и графики работ",
        icon: "⏱️",
    },
];

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <Box
            id="about"
            ref={ref}
            component="section"
            sx={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: { xs: '0 16px', sm: '0 20px', md: '0 24px' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '4px',
                    borderRadius: '2px',
                },
            }}
        >
            {/* Заголовок */}
            <Typography
                variant="h2"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    mb: { xs: 4, md: 6 },
                    fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.2rem' },
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                    px: { xs: 1, sm: 0 },
                }}
            >
                <motion.img
                    src={ToolsIco}
                    alt="Инструменты"
                    width={isSmallMobile ? '24px' : isMobile ? '28px' : '36px'}
                    style={{ display: 'block' }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                О компании
            </Typography>

            {/* Контент */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: '32px', md: '60px' },
                    alignItems: 'center',
                    mb: { xs: '40px', md: '80px' },
                }}
            >
                {/* Текст */}
                <Box sx={{ flex: 1, width: '100%' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 600,
                                mb: { xs: 2, md: 3 },
                                color: 'text.primary',
                                fontSize: { xs: '1.4rem', sm: '1.5rem', md: '1.8rem' },
                                lineHeight: 1.3,
                            }}
                        >
                            Профессиональный электромонтаж в Волгограде
                        </Typography>
                        <Typography
                            sx={{
                                color: 'text.secondary',
                                mb: { xs: 2, md: 3 },
                                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                lineHeight: 1.7,
                            }}
                        >
                            <strong>ЭлектроЖор</strong> — это команда сертифицированных специалистов, предоставляющая полный спектр электромонтажных работ любой сложности. Мы работаем с 2010 года и успешно реализовали более 500 проектов.
                        </Typography>
                        <Typography
                            sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                lineHeight: 1.7,
                            }}
                        >
                            Наши специалисты регулярно проходят обучение и аттестацию, что позволяет гарантировать соответствие всех работ требованиям ПУЭ и ГОСТ.
                        </Typography>
                    </motion.div>
                </Box>

                {/* Изображение */}
                <Box
                    sx={{
                        flex: 1,
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        maxWidth: '550px',
                        minHeight: { xs: '260px', sm: '300px' },
                        width: '100%',
                        backgroundColor: theme.palette.grey[100],
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                >
                    <img
                        src={ElectricTeamImg}
                        alt="Профессиональные электромонтажники"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.style.backgroundColor = theme.palette.grey[300];
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                            color: '#fff',
                            padding: { xs: '12px', sm: '20px' },
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                            Наша команда на объекте в Волгограде, 2023 год
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Преимущества */}
            <Box sx={{ mb: { xs: 6, md: 10 } }}>
                <Typography
                    variant="h3"
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 6 },
                        fontSize: { xs: '1.4rem', sm: '1.5rem', md: '1.8rem' },
                        fontWeight: 600,
                        color: 'text.primary',
                    }}
                >
                    Почему выбирают нас
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        },
                        gap: { xs: '16px', sm: '20px', md: '30px' },
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '2rem', sm: '2.5rem' },
                                    mb: { xs: 1, sm: 2 },
                                    lineHeight: 1
                                }}
                            >
                                {benefit.icon}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    mb: { xs: 1, sm: 1.5 },
                                    fontSize: { xs: '1.1rem', sm: '1.2rem' },
                                    color: 'text.primary',
                                }}
                            >
                                {benefit.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}
                            >
                                {benefit.description}
                            </Typography>
                        </BenefitCard>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default About;