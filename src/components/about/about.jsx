import ElectricTemaImg from './img/electrics_team_pic 1.png'
import Text from "@mui/material/Typography"
import ToolsIco from "./img/Wrench-Free-Download-PNG 1.png"
import style from "./about.module.css"
import { Box } from '@mui/material'

function About() {
    return (
        <div id='about' className={style.aboutBlock}>
                <Text sx={{
                display: "flex", justifyContent: "center", alignItems: "center",
                fontFamily: "Poppins",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
                letterSpacing: "4p",
                display: { xs: "none", md: "flex" }
            }}>
                <img src={ToolsIco} alt="" />
                О компании
            </Text>
            <Box sx={{
                display: { xs: "none", md: "flex" }
            }} className={style.AboutContent}>
            
                <div className={style.AboutContentText}>
                    <Text className={style.paragraph}>
                        ЭлектроЖор — Ваш надежный партнер в электромонтаже
                        Профессиональные электромонтажные услуги в Волгограде
                    </Text>
                    <Text className={style.text}>
                        Мы — Бригада Электромонтажников Волгограда с богатым опытом и экспертизой в электромонтажных работах. Наша команда готова предоставить вам качественные услуги с учетом всех тонкостей и потребностей современного времени. Мы специализируемся на электромонтаже в домах, квартирах, офисах и производственных помещениях.
                    </Text>
                    <Text className={style.paragraph}>
                        Почему выбирают нас?
                    </Text>
                    <Text className={style.text} sx={{ marginLeft: "17px" }}                  >
                        <li>Опыт и профессионализм. Мы знаем все тонкости и нюансы электромонтажа.</li>
                        <li>Комплексный подход. Обеспечим вашу электрическую инфраструктуру всем необходимым.</li>
                        <li>Гарантия качества. Мы делаем электрику исключительно хорошо с расчетом на долгий срок службы.</li>
                        <li>Привлекательные цены. Предлагаем лучшую форму электромонтажа по приятным тарифам.</li>
                    </Text>
                </div>
                <img src={ElectricTemaImg} alt="" width="530px" />
            </Box>
            <Box sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: 'column',
                width: "340px",
                margin: "30px auto ",
                gap: "15px"
            }} >
                <Text sx={{
                display: "flex", justifyContent: "center", alignItems: "center",
                fontFamily: "Poppins",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
                letterSpacing: "4p",
                marginBottom: "30px"
            }}>
                <img width={50} src={ToolsIco} alt="" />
                О компании
            </Text>
                <Text
                    sx={{
                        color: "#000",
                        fontFamily: "Poppins",
                        fontSize: "17px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        letterSpacing: "1.6px",
                    }}
                >
                    ЭлектроЖор — Ваш надежный партнер в электромонтаже
                    Профессиональные электромонтажные услуги в Волгограде
                </Text>
                <Text
                    sx={{
                        color: "rgba(0, 0, 0, 0.66)",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineGeight: "normal",
                        letterSpacing: "1.4px",
                        height: "199px"
                    }}
                >
                    Мы — Бригада Электромонтажников Волгограда с богатым опытом и экспертизой в электромонтажных работах. Наша команда готова предоставить вам качественные услуги с учетом всех тонкостей и потребностей современного времени. Мы специализируемся на электромонтаже в домах, квартирах, офисах и производственных помещениях.
                </Text>
                <img src={ElectricTemaImg} alt="" width="330px" />
                <Text
                    sx={{
                        color: "#000",
                        fontFamily: "Poppins",
                        fontSize: "17px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        letterSpacing: "1.6px",
                    }}
                >
                    Почему выбирают нас?
                </Text>
                <Text
                    sx={{
                        color: "rgba(0, 0, 0, 0.66)",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineGeight: "normal",
                        letterSpacing: "1.4px",
                        height: "199px"
                    }}
                >
                <li>Опыт и профессионализм. Мы знаем все тонкости и нюансы электромонтажа.</li>
                        <li>Комплексный подход. Обеспечим вашу электрическую инфраструктуру всем необходимым.</li>
                        <li>Гарантия качества. Мы делаем электрику исключительно хорошо с расчетом на долгий срок службы.</li>
                        <li>Привлекательные цены. Предлагаем лучшую форму электромонтажа по приятным тарифам.</li>                    
                </Text>
            </Box>
        </div >
    )
}
export default About;