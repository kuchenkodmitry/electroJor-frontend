import style from "./workExamples.module.css"
import FirstImg from "./img/1.png"
import { GallaryContext, ModalContext, Context } from "../context"
import { useContext } from "react"
import StandardImageList from "../imageList/imageList"


import P5img1 from "./img/pojects/5/1.jpeg"
import P5img2 from "./img/pojects/5/2.jpeg"
import P5img3 from "./img/pojects/5/3.jpeg"
import P5img4 from "./img/pojects/5/4.jpeg"
import P5img5 from "./img/pojects/5/5.jpeg"
import P5img6 from "./img/pojects/5/6.jpeg"
import P5img7 from "./img/pojects/5/7.jpeg"
import P5img8 from "./img/pojects/5/8.jpeg"
import P5img9 from "./img/pojects/5/9.jpeg"
import P5img10 from "./img/pojects/5/10.jpeg"
import P5logo from "./img/pojects/5/logo.jpeg"

import P6img1 from "./img/pojects/6/1.jpeg"
import P6img2 from "./img/pojects/6/2.jpeg"
import P6img3 from "./img/pojects/6/3.jpeg"
import P6img4 from "./img/pojects/6/4.jpeg"
import P6img5 from "./img/pojects/6/5.jpeg"
import P6img6 from "./img/pojects/6/6.jpeg"
import P6img7 from "./img/pojects/6/7.jpeg"
import P6img8 from "./img/pojects/6/8.jpeg"
import P6logo from "./img/pojects/6/logo.jpeg"


import P7img1 from "./img/pojects/7/1.jpeg"
import P7img2 from "./img/pojects/7/2.jpeg"
import P7img3 from "./img/pojects/7/3.jpeg"
import P7img4 from "./img/pojects/7/4.jpeg"
import P7img5 from "./img/pojects/7/5.jpeg"
import P7logo from "./img/pojects/7/logo.jpeg"

import P8img1 from "./img/pojects/8/1.jpeg"
import P8img2 from "./img/pojects/8/2.jpeg"
import P8img3 from "./img/pojects/8/3.jpeg"
import P8img4 from "./img/pojects/8/4.jpeg"
import P8img5 from "./img/pojects/8/5.jpeg"
import P8img6 from "./img/pojects/8/6.jpeg"
import P8img7 from "./img/pojects/8/7.jpeg"
import P8img8 from "./img/pojects/8/8.jpeg"
import P8img9 from "./img/pojects/8/9.jpeg"
import P8img10 from "./img/pojects/8/10.jpeg"
import P8logo from "./img/pojects/8/logo.jpeg"

import P9img1 from "./img/pojects/9/1.jpeg"
import P9img2 from "./img/pojects/9/2.jpeg"
import P9img3 from "./img/pojects/9/3.jpeg"
import P9img4 from "./img/pojects/9/4.jpeg"
import P9img5 from "./img/pojects/9/5.jpeg"
import P9img6 from "./img/pojects/9/6.jpeg"
import P9img7 from "./img/pojects/9/7.jpeg"
import P9img8 from "./img/pojects/9/8.jpeg"
import P9img9 from "./img/pojects/9/9.jpeg"
import P9logo from "./img/pojects/9/logo.jpeg"

const cards = [{
    imgData: [
        {
            src: P5img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img1, width: 320, height: 213 },
            ]
        },
        {
            src: P5img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img2, width: 320, height: 213 },
            ]
        },
        {
            src: P5img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img3, width: 320, height: 213 },
            ]
        },
        {
            src: P5img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img4, width: 320, height: 213 },
            ]
        },
        {
            src: P5img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img5, width: 320, height: 213 },
            ]
        },
        {
            src: P5img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img6, width: 320, height: 213 },
            ]
        },
        {
            src: P5img7,
            alt: 'Honey',
            id: 6,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img7, width: 320, height: 213 },
            ]
        },
        {
            src: P5img8,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img8, width: 320, height: 213 },
            ]
        },
        {
            src: P5img9,
            alt: 'Honey',
            id: 8,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img9, width: 320, height: 213 },
            ]
        },
        {
            src: P5img10,
            alt: 'Honey',
            id: 9,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P5img10, width: 320, height: 213 },
            ]
        },

    ],
    id: 4,
    img: P5logo,
    title: "Монтаж электропроводки ЖК Атлант",
    description: "",
    html: <div>
        <h1>
            Монтаж электропроводки ЖК Атлант
        </h1>
        <StandardImageList />
        <p>
            Добро пожаловать в наше портфолио, где мы гордимся успешно выполненной работой по монтажу электропроводки в жилом комплексе «ЖК Атлант» в городе Волгоград. Мы — команда профессионалов, специализирующихся на предоставлении надежных и качественных электромонтажных услуг для жилых и коммерческих объектов.
        </p>
        <h3>
            Профессиональный монтаж силового и слаботочного кабеля
        </h3>
        <p>
            Наш опытный и квалифицированный персонал с легкостью справился с прокладкой 310 метров силового кабеля, что обеспечило стабильное и эффективное электрооборудование для жилых помещений. Мы также уложили 119 метров слаботочного кабеля, что позволит вам без проблем подключать различные устройства и системы.
        </p>
        <h3>
            Аккуратное штробление стен
        </h3>
        <p>
            Мы уделяем особое внимание штроблению стен из кирпича и гипса. Наша команда тщательно продумывает и выполняет каждый штробовочный проект, чтобы обеспечить эстетичный вид и минимальные вмешательства в интерьер. Таким образом, ваша квартира останется не только функциональной, но и стильной.
        </p>
        <h3>
            Качественные установки и отверстия
        </h3>
        <p>
            Мы гарантируем качественные установки и отверстия для прокладки электропроводки. Установили 32 отверстия Кирпич-гипс, чтобы обеспечить надежное размещение кабелей и проводов. Кроме того, мы установили 2 внутренних щита по 24 модуля каждый, предоставляя вам удобный контроль над электрическими цепями и обеспечивая безопасность вашей электроинфраструктуры.
        </p>
        <h3>
            Надежность и опытность команды
        </h3>
        <p>
            Мы ценим доверие наших клиентов, поэтому вся наша работа выполняется опытными и профессиональными специалистами. Мы гарантируем высокое качество работ и соблюдение всех стандартов безопасности. В результате вы получаете надежное и стабильное электрооборудование, которое прослужит вам долгие годы.
        </p>
        <h3>
            Доверьтесь профессионалам
        </h3>
        <p>
            Если вам требуется профессиональный монтаж электропроводки для вашего дома или офиса, обратитесь к нам сегодня.Звоните по номеру 8-992-150-44-66 и получите надежное электрооборудование для вашего комфортного проживания!
        </p>
    </div>
}, {
    imgData: [
        {
            src: P6img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img1, width: 320, height: 213 },
            ]
        },
        {
            src: P6img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img2, width: 320, height: 213 },
            ]
        },
        {
            src: P6img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img3, width: 320, height: 213 },
            ]
        },
        {
            src: P6img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img4, width: 320, height: 213 },
            ]
        },
        {
            src: P6img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img5, width: 320, height: 213 },
            ]
        },
        {
            src: P6img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img6, width: 320, height: 213 },
            ]
        },
        {
            src: P6img7,
            alt: 'Honey',
            id: 6,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img7, width: 320, height: 213 },
            ]
        },
        {
            src: P6img8,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P6img8, width: 320, height: 213 },
            ]
        }
    ],
    id: 5,
    img: P6logo,
    title: "Электромантаж в 4 комнатной квартире",
    description: "",
    html: <div>
        <h1>
            Электромантаж в 4 комнатной квартире
        </h1>
        <StandardImageList />
        <p>
            В нашем портфолио представлена успешно выполненная работа по электромонтажу в 4-комнатной квартире. Мы готовы поделиться деталями этого проекта, который включал установку розеток и выключателей, прокладку 460 метров силового кабеля и штробление стен под кабель.
        </p>
        <h3>
            Прокладка силового кабеля
        </h3>
        <p>
            Мы аккуратно проложили 460 метров силового кабеля, обеспечивая надежность и эффективность электрооборудования в квартире. Наша команда опытных специалистов выполнила эту задачу с большой тщательностью и аккуратностью, учитывая материалы стен — бетон и кирпич. Мы стремимся соблюдать высокие стандарты качества и безопасности во всех наших проектах.
        </p>
        <h3>
            Штробление стен под кабель
        </h3>
        <p>
            В рамках этого проекта мы осуществили штробление стен для укладки кабеля с максимальной эстетикой и минимальным вмешательством в интерьер. Наша команда профессионалов провела штробление с большой тщательностью, обеспечивая точность и надежность укладки кабеля.
        </p>
        <h3>
            Качество и надежность
        </h3>
        <p>
            Мы гарантируем высокое качество работы и безопасность электрической системы. Вся наша работа выполняется опытными и квалифицированными специалистами с использованием современных методов и материалов. Наш приоритет — ваше удовлетворение и долгосрочная надежность электрической системы в вашей квартире.
        </p>
        <h3>
            Цена и консультация
        </h3>
        <p>
            Общая стоимость работы составила 58 000 тыс. рублей, включая все необходимые материалы и оплату труда наших профессионалов. Мы готовы предоставить вам более подробную информацию о наших услугах и ответить на все ваши вопросы. Для получения консультации и записи на встречу свяжитесь с Георгием по номеру 8-992-150-44-66. Мы с удовольствием поможем вам реализовать ваши электромонтажные проекты и обеспечить надежность и безопасность вашей электрической системы.
        </p>
    </div>
},
{
    imgData: [
        {
            src: P7img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P7img1, width: 320, height: 213 },
            ]
        },
        {
            src: P7img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P7img2, width: 320, height: 213 },
            ]
        },
        {
            src: P7img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P7img3, width: 320, height: 213 },
            ]
        },
        {
            src: P7img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P7img4, width: 320, height: 213 },
            ]
        },
        {
            src: P7img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P7img5, width: 320, height: 213 },
            ]
        },
    ],
    id: 6,
    img: P7logo,
    title: "Электромонтаж в частном 3-комнатном доме",
    description: "",
    html: <div>
        <h1>
            Электромонтаж в частном 3-комнатном доме
        </h1>
        <StandardImageList />
        <p>
            Добро пожаловать в наше портфолио, где мы представляем успешно выполненную работу по электромонтажу в частном 3-комнатном доме в Волгограде. Наша команда специалистов готова поделиться деталями проекта, который включал работу в гафре с полным штроблением стен, установку уличного освещения и прокладку подвода Сип провода к дому.
        </p>
        <h3>
            Гафровая работа с полным штроблением стен
        </h3>
        <p>
            Мы провели качественную гафровую работу с полным штроблением стен, обеспечивая надежное размещение электропроводки и минимизируя видимость кабелей и проводов. Мы уделили особое внимание эстетике и безопасности, чтобы ваш дом оставался не только функциональным, но и привлекательным с точки зрения дизайна.
        </p>
        <h3>
            Уличное освещение
        </h3>
        <p>
            Для обеспечения вашей безопасности и комфорта на участке, мы произвели установку уличного освещения. Это позволит подчеркнуть красоту вашего дома и создать атмосферу безопасности в темное время суток.
        </p>
        <h3>
            Прокладка подвода Сип провода к дому
        </h3>
        <p>
            Мы заботимся о качестве и надежности вашей электрической системы, поэтому осуществили прокладку Сип провода, который обладает высокой степенью защиты от внешних воздействий и обеспечивает стабильное электроснабжение вашего дома.
        </p>
        <h3>
            Работа по фиксированной цене
        </h3>
        <p>
            Мы предлагаем прозрачные условия сотрудничества и работу по фиксированной цене, чтобы вы могли спланировать свой бюджет заранее и избежать неожиданных дополнительных затрат. Стоимость этой работы составила 54.000 рублей.
        </p>
        <p>
            Если вы ищете надежных и опытных специалистов для электромонтажа вашего дома, обращайтесь к нам сегодня. Звоните по номеру 8-992-150-44-66 и получите качественные электромонтажные решения от профессионалов Волгограда. Мы с удовольствием поможем вам обеспечить надежную и безопасную электрическую систему для вашего дома!
        </p>
    </div>
}, {
    imgData: [
        {
            src: P8img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img1, width: 320, height: 213 },
            ]
        },
        {
            src: P8img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img2, width: 320, height: 213 },
            ]
        },
        {
            src: P8img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img3, width: 320, height: 213 },
            ]
        },
        {
            src: P8img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img4, width: 320, height: 213 },
            ]
        },
        {
            src: P8img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img5, width: 320, height: 213 },
            ]
        },
        {
            src: P8img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img6, width: 320, height: 213 },
            ]
        },
        {
            src: P8img7,
            alt: 'Honey',
            id: 6,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img7, width: 320, height: 213 },
            ]
        },
        {
            src: P8img8,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img8, width: 320, height: 213 },
            ]
        },
        {
            src: P8img9,
            alt: 'Honey',
            id: 8,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img9, width: 320, height: 213 },
            ]
        },
        {
            src: P8img10,
            alt: 'Honey',
            id: 9,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P8img10, width: 320, height: 213 },
            ]
        },
    ],
    id: 7,
    img: P8logo,
    title: "Электромонтаж в квартире ЖК Репников",
    description: "",
    html: <div>
        <h1>
            Электромонтаж в квартире ЖК Репников
        </h1>
        <StandardImageList />
        <p>
            Мы рады представить успешно выполненную работу по электромонтажу в однокомнатной квартире, которая была переоформлена в двушку в жилом комплексе «ЖК Репников» в городе Волгограде. Наша команда специалистов оказала профессиональную помощь заказчику, который являлся строителем и выполнял практически все работы своими руками, за исключением электрики.
        </p>
        <h3>
            Монтаж в гофрокабеле
        </h3>
        <p>
            Мы провели качественный монтаж проводов по полу и потолку в гофрокабеле. Этот метод обеспечивает надежность и безопасность электрических соединений, а также позволяет сокрыть провода от глаз. В результате ваш интерьер остается чистым и аккуратным.
        </p>
        <h3>
            Распредкоробки в стенах и на потолке
        </h3>
        <p>
            Наши опытные специалисты установили распределительные коробки в стенах и на потолке вашей квартиры. Это позволит удобно и безопасно подключить все электрические устройства и создать эффективную электрическую сеть.
        </p>
        <h3>
            Монтаж Интернет и ТВ кабеля
        </h3>
        <p>
            Мы также заботимся о вашем комфорте и обеспечили монтаж интернет и ТВ кабеля. Это позволит вам наслаждаться широким спектром развлекательных возможностей и быть всегда онлайн.
        </p>
        <h3>
            Стоимость работ
        </h3>
        <p>
            Мы ценим каждого клиента и предлагаем прозрачные и конкурентоспособные цены на наши услуги. Стоимость электромонтажа в этой квартире составила 41.000 рублей.
        </p>
        <p>
            Если вам необходимы профессиональные услуги по электромонтажу, обратитесь к нам сегодня. Звоните по номеру 8-992-150-44-66 и получите надежные и качественные решения от опытных специалистов. Мы всегда готовы помочь вам обеспечить надежную и безопасную электрическую систему для вашей квартиры!
        </p>
    </div>
}]

function CardList () {
    const [modalContext, setModalContext] = useContext(ModalContext);
    const [context, setContext] = useContext(Context);
    const [gallaryContext, setGallryContext] = useContext(GallaryContext);
    return (
    <div className={style.cardBlock}>
    {cards.map(e => {
        return (
            <div onClick={() => {
                setContext(true);
                setModalContext(e.html);
                setGallryContext(e.imgData);
            }} className={style.backgroundContent}>
                <div style={{ backgroundImage: `url(${e.img})`, backgroundSize: "cover" }} className={style.cardBlockStyle}>
                </div>
                <div className={style.titleFLex}>
                <p className={style.titleSize}>{e.title}</p>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_179_5)">
                        <path d="M13.6069 8.80779L13.6041 8.81157C13.3528 8.58093 13.0228 8.4375 12.6563 8.4375C11.88 8.4375 11.25 9.0675 11.25 9.84377C11.25 10.2544 11.4281 10.62 11.7084 10.8769L11.7056 10.8807L16.2 15L11.7056 19.1203L11.7084 19.1241C11.4281 19.38 11.25 19.7456 11.25 20.1563C11.25 20.9325 11.88 21.5625 12.6562 21.5625C13.0228 21.5625 13.3528 21.4191 13.604 21.1895L13.6068 21.1932L19.2318 16.0369C19.5215 15.7697 19.6875 15.3947 19.6875 15C19.6875 14.6054 19.5215 14.2303 19.2318 13.9632L13.6069 8.80779ZM15 0C6.71627 0 0 6.71627 0 15C0 23.2837 6.71627 30 15 30C23.2837 30 30 23.2837 30 15C30 6.71627 23.2837 0 15 0ZM15 27.1875C8.28 27.1875 2.8125 21.72 2.8125 15C2.8125 8.28 8.28 2.8125 15 2.8125C21.72 2.8125 27.1875 8.28 27.1875 15C27.1875 21.72 21.72 27.1875 15 27.1875Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_179_5">
                            <rect width="30" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </div>
            </div>
        )
    })}
    </div>
    )
}

export default CardList;