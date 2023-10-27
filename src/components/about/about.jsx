import ElectricTemaImg from './img/electrics_team_pic 1.png'
import Text from "@mui/material/Typography"
import ToolsIco from "./img/Wrench-Free-Download-PNG 1.png"
import style from "./about.module.css"
    
function About() {
    return (
        <div className={style.aboutBlock}>
            <Text sx={{
                display: "flex", justifyContent: "center", alignItems: "center",
                fontFamily: "Poppins",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
                letterSpacing: "4p"
            }}>
                <img src={ToolsIco} alt="" />
                О компании
            </Text>
            <div className={style.AboutContent}>
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
                    <Text className={style.text}  sx={{marginLeft: "17px"}}                  >
                    <li>Опыт и профессионализм. Мы знаем все тонкости и нюансы электромонтажа.</li>
                    <li>Комплексный подход. Обеспечим вашу электрическую инфраструктуру всем необходимым.</li>
                    <li>Гарантия качества. Мы делаем электрику исключительно хорошо с расчетом на долгий срок службы.</li>
                    <li>Привлекательные цены. Предлагаем лучшую форму электромонтажа по приятным тарифам.</li>
                    </Text>
                </div>
                <img src={ElectricTemaImg} alt=""  width="530px"/>
            </div>
        </div>
    )
}
export default About;