import style from "./workExamples.module.css"
import FirstImg from "./img/1.png"
import { GallaryContext, ModalContext, Context } from "../context"
import { useContext } from "react"
import StandardImageList from "../imageList/imageList"
import P1img1 from "./img/pojects/1/1.jpg"
import P1img2 from "./img/pojects/1/2.jpg"
import P1img3 from "./img/pojects/1/3.jpg"
import P1img4 from "./img/pojects/1/4.jpg"
import P1img5 from "./img/pojects/1/5.jpg"
import P1img6 from "./img/pojects/1/6.jpg"
import P1img7 from "./img/pojects/1/7.jpg"
import P1img8 from "./img/pojects/1/8.jpg"
import P1img9 from "./img/pojects/1/9.jpg"
import P1logo from "./img/pojects/1/logo.jpg"

import P2img1 from "./img/pojects/2/1.jpg"
import P2img2 from "./img/pojects/2/2.jpg"
import P2img3 from "./img/pojects/2/3.jpg"
import P2img4 from "./img/pojects/2/4.jpg"
import P2img5 from "./img/pojects/2/5.jpg"
import P2img6 from "./img/pojects/2/6.jpg"
import P2img7 from "./img/pojects/2/7.jpg"
import P2img8 from "./img/pojects/2/8.jpg"
import P2img9 from "./img/pojects/2/9.jpg"
import P2logo from "./img/pojects/2/logo.jpg"

import P3img1 from "./img/pojects/3/1.jpg"
import P3img2 from "./img/pojects/3/2.jpg"
import P3img3 from "./img/pojects/3/3.jpg"
import P3img4 from "./img/pojects/3/4.jpg"
import P3img5 from "./img/pojects/3/5.jpg"
import P3img6 from "./img/pojects/3/6.jpg"
import P3img7 from "./img/pojects/3/7.jpg"
import P3img8 from "./img/pojects/3/8.jpg"
import P3img9 from "./img/pojects/3/9.jpg"
import P3logo from "./img/pojects/3/logo.jpg"

import P4img1 from "./img/pojects/4/1.jpg"
import P4img2 from "./img/pojects/4/2.jpg"
import P4img3 from "./img/pojects/4/3.jpg"
import P4img4 from "./img/pojects/4/4.jpg"
import P4img5 from "./img/pojects/4/5.jpg"
import P4img6 from "./img/pojects/4/6.jpg"
import P4img7 from "./img/pojects/4/7.jpg"
import P4img8 from "./img/pojects/4/8.jpg"
import P4img9 from "./img/pojects/4/9.jpg"
import P4img10 from "./img/pojects/4/10.jpg"
import P4logo from "./img/pojects/4/logo.jpg"

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

const cards = [{
    imgData: [
        {
            src: P1img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img1, width: 320, height: 213 },
            ]
        },
        {
            src: P1img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img2, width: 320, height: 213 },
            ]
        },
        {
            src: P1img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img3, width: 320, height: 213 },
            ]
        },
        {
            src: P1img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img4, width: 320, height: 213 },
            ]
        },
        {
            src: P1img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img5, width: 320, height: 213 },
            ]
        },
        {
            src: P1img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img6, width: 320, height: 213 },
            ]
        },
        {
            src: P1img6,
            alt: 'Honey',
            id: 6,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img6, width: 320, height: 213 },
            ]
        },
        {
            src: P1img7,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img7, width: 320, height: 213 },
            ]
        },
        {
            src: P1img8,
            alt: 'Honey',
            id: 8,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img8, width: 320, height: 213 },
            ]
        },
        {
            src: P1img9,
            alt: 'Honey',
            id: 9,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img9, width: 320, height: 213 },
            ]
        },

    ],
    id: 0,
    img: P1logo,
    title: "Монтаж Электропроводки и Установка Розеток в 2-комнатной квартире",
    description: "",
    html: <div>
        <h2>Монтаж Электропроводки и Установка Розеток в 2-комнатной квартире</h2>
        <p>Мы представляем успешно завершенный проект по обновлению электропроводки и установке розеток в просторной 2-комнатной квартире площадью 82 квадратных метра. Работая в Волгограде, наша команда специалистов оказала профессиональные услуги по электромонтажу, обеспечив высокое качество и надежность выполнения каждого этапа проекта.</p>
        <StandardImageList />
        <h4>
            Основные Этапы Проекта
        </h4>
        <p>
            Мы провели полную замену электропроводки, гарантируя безопасное электрическое оборудование для жильцов. Демонтировали старые выключатели и розетки, установив взамен новые, соответствующие современным стандартам. Более 330 метров кабеля было использовано для обеспечения электропитания во всех уголках квартиры. Штробы длиной 35 метров и 37 отверстий под подрозетники были аккуратно выполнены нашими опытными мастерами.
        </p>
        <h4>
            Технические Детали
        </h4>
        <p>Мы уделили особое внимание деталям, используя метод соединения гильзы ГМЛ, чтобы обеспечить надежность и долговечность проводки. Установка внутреннего щита на 25 модуля была произведена согласно высоким стандартам безопасности. Также мы организовали сборку автоматики в щите для удобного управления электроэнергией. Новый интернет-кабель длиной 30 метров обеспечивает связь во всех уголках квартиры.</p>
        <h4>
            Профессиональное Исполнение
        </h4>
        <p>
            Замена вводного кабеля и установка распределительных коробок (12 штук) были выполнены точно и аккуратно, чтобы обеспечить надежное электрическое соединение. Весь проект завершился успешно благодаря нашей специализированной команде, которая стремится к высшему качеству в каждой детали.
        </p>
        <h4>Стоимость и Контакты</h4>
        <p>Общая стоимость работ составила 61 300 рублей, что включает в себя как затраты на материалы, так и оплату труда наших опытных специалистов. Если вам требуется надежный и опытный партнер для электромонтажных работ, не стесняйтесь обращаться к нам. Для консультации и записи на проект свяжитесь с Георгием по номеру 8-909-383-99-46. Мы с удовольствием поможем воплотить ваши электрические проекты в реальность и обеспечить надежное электрооборудование в вашем жилье.</p>
    </div>
},
{
    imgData: [
        {
            src: P2img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img1, width: 320, height: 213 },
            ]
        },
        {
            src: P2img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img2, width: 320, height: 213 },
            ]
        },
        {
            src: P2img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img3, width: 320, height: 213 },
            ]
        },
        {
            src: P2img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img4, width: 320, height: 213 },
            ]
        },
        {
            src: P2img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img5, width: 320, height: 213 },
            ]
        },
        {
            src: P2img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img6, width: 320, height: 213 },
            ]
        },
        {
            src: P2img6,
            alt: 'Honey',
            id: 6,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img6, width: 320, height: 213 },
            ]
        },
        {
            src: P2img7,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img7, width: 320, height: 213 },
            ]
        },
        {
            src: P2img8,
            alt: 'Honey',
            id: 8,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img8, width: 320, height: 213 },
            ]
        },
        {
            src: P2img9,
            alt: 'Honey',
            id: 9,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img9, width: 320, height: 213 },
            ]
        },

    ],
    id: 1,
    img: P2logo,
    title: "Монтаж электропроводки в 3-комнатной квартире ЖК Бродвей",
    description: "",
    html:
        <div>
            <h1>
                Монтаж электропроводки в 3-комнатной квартире ЖК Бродвей
            </h1>
            <StandardImageList />
            <h3>
                Описание проекта
            </h3>
            <p>Наша команда специалистов была нанята для профессионального монтажа электропроводки в 3-комнатной квартире площадью 82 квадратных метра в жилом комплексе ЖК Бродвей. Заказчик искал надежную и опытную команду, которая обеспечит безопасность и эффективность электрической системы его нового жилья.</p>
            <h3>
                Поставленные задачи
            </h3>

            <li>    Прокладка кабельных трасс и штроб под кабель кирпичной стены. </li>
            <li>    Создание отверстий под подрозетники в определенных местах для установки розеток. </li>
            <li>    Установка подрозетников и распределительных коробок для организации электрической проводки. </li>
            <li>    Точное штробление под щит для монтажа внутреннего щита на 24 модуля. </li>
            <li>    Сборка и установка щита для обеспечения контроля и защиты электрооборудования. </li>
            <li>    Прокладка интернет-кабеля для обеспечения высокоскоростного интернета во всей квартире. </li>
            <li>    Временное освещение для комфортной работы в процессе монтажа. </li>
            <li>    Оклейка дверей для защиты от механических повреждений. </li>
            <li>    Закупка необходимого материала для качественного выполнения работ. </li>
            <h3>Использованные материалы и технологии</h3>
            <p>В проекте использовались высококачественные материалы и передовые технологии, обеспечивающие долговечность и безопасность электрооборудования.</p>
            <h3>Результат и удовлетворенность клиента</h3>
            <p>Наша команда успешно завершила монтаж электропроводки в квартире в срок и в полном соответствии с техническими требованиями. Заказчик остался доволен нашей профессиональной работой и внимательным отношением к деталям. Он был приятно удивлен быстрой и качественной установкой электропроводки, а также предоставленной скидкой на работы через VK. Клиент теперь наслаждается надежностью и эффективностью своей электрической системы.</p>
            <h3>Стоимость работ</h3>
            <p>Итого: 62.000 рублей, включая все выполненные работы и использованные материалы.</p>
            <h3>Контакты</h3>
            <p>Для профессионального монтажа электропроводки в вашей квартире, обращайтесь к Георгию по телефону: 8-909-383-99-46. Мы с радостью поможем вам обеспечить безопасность и комфорт в вашем жилище.</p>
        </div>
}, {
    imgData: [
        {
            src: P3img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img1, width: 320, height: 213 },
            ]
        },
        {
            src: P3img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img2, width: 320, height: 213 },
            ]
        },
        {
            src: P3img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img3, width: 320, height: 213 },
            ]
        },
        {
            src: P3img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img4, width: 320, height: 213 },
            ]
        },
        {
            src: P3img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img5, width: 320, height: 213 },
            ]
        },
        {
            src: P3img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img6, width: 320, height: 213 },
            ]
        },
        {
            src: P3img7,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img7, width: 320, height: 213 },
            ]
        },
        {
            src: P3img8,
            alt: 'Honey',
            id: 8,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img8, width: 320, height: 213 },
            ]
        },
        {
            src: P3img9,
            alt: 'Honey',
            id: 9,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P3img9, width: 320, height: 213 },
            ]
        },

    ],
    id: 2,
    img: P3logo,
    title: "Профессиональный электромонтаж с нуля: Комфорт и надежность в 3-комнатной квартире",
    description: "",
    html: <div>
        <h1>
            Монтаж электропроводки с нуля
        </h1>
        <h2>Профессиональный электромонтаж с нуля: Комфорт и надежность в 3-комнатной квартире</h2>
        <StandardImageList />
        <h3>Обширный проект: Монтаж электропроводки в 3-комнатной квартире</h3>
        <p>Мы с гордостью представляем успешно завершенный проект по монтажу электропроводки с нуля в просторной 3-комнатной квартире общей площадью 77 квадратных метров. Наша команда профессиональных электриков предоставила полный комплекс услуг по электромонтажу, обеспечивая безупречное функционирование электрической системы и комфортную жизнь для наших заказчиков.</p>
        <h3>Электромонтаж высочайшего уровня: 77 квадратных метров комфорта</h3>
        <p>
            Мы тщательно спроектировали и реализовали электромонтажную систему, соответствующую уникальным потребностям наших клиентов. Общая площадь 77 квадратных метров была полностью охвачена нашими профессиональными решениями, гарантирующими комфортное и безопасное использование электричества во всей квартире.
        </p>
        <h3>
            Точность в деталях: Метров штробы гипс — 46, отверстий под подрозетник — 56
        </h3>
        <p>
            Мы уделяем особое внимание каждой детали проекта, чтобы обеспечить электромонтаж высочайшего качества. С 46 метрами аккуратно выполнанных штроб в гипсокартоне и 56 отверстиями под подрозетники, наша работа отличается безукоризненностью и профессионализмом, что делает наши услуги идеальным выбором для вашего дома.
        </p>
        <h3>Безукоризненный подход: Метод соединения гильзы ГМЛ</h3>
        <p>
            Мы используем передовые технологии и методы соединения гильзы ГМЛ, обеспечивая максимальную надежность и долговечность электрических соединений. Наш безукоризненный подход к каждому аспекту электромонтажа позволяет нам гарантировать безопасность и эффективность вашей электрической системы.
        </p>
        <h3>Профессиональное оборудование и материалы: Установка внутреннего щита и патронов освещения</h3>
        <p>Для обеспечения долговечности и надежности вашей электрической системы, мы установили внутренний щит на 24 модуля и 12 патронов освещения. Это позволяет легко управлять электричеством и создавать уютную атмосферу в вашем доме.</p>
        <h3>Профессиональный подход к вашему комфорту: 64.000 руб. за работу и 35.000 руб. на материалы</h3>
        <p>Мы гарантируем высокое качество работы по монтажу электропроводки в вашей квартире. Стоимость работ составила 64.000 рублей, а затраты на материалы — 35.000 рублей. Это отличная инвестиция в комфорт и безопасность вашего дома.</p>
        <p>Для качественного и профессионального электромонтажа в вашей квартире обращайтесь к нам по телефону: 89093839946 (Георгий). Мы с удовольствием поможем вам создать надежную и современную электрическую систему для вашего дома.</p>
    </div>
}, {
    imgData: [
        {
            src: P4img1,
            alt: 'Breakfast',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img1, width: 320, height: 213 },
            ]
        },
        {
            src: P4img2,
            alt: 'Burger',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img2, width: 320, height: 213 },
            ]
        },
        {
            src: P4img3,
            alt: 'Camera',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img3, width: 320, height: 213 },
            ]
        },
        {
            src: P4img4,
            alt: 'Coffee',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img4, width: 320, height: 213 },
            ]
        },
        {
            src: P4img5,
            alt: 'Hats',
            id: 4,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img5, width: 320, height: 213 },
            ]
        },
        {
            src: P4img6,
            alt: 'Honey',
            id: 5,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img6, width: 320, height: 213 },
            ]
        },
        {
            src: P4img7,
            alt: 'Honey',
            id: 6,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img7, width: 320, height: 213 },
            ]
        },
        {
            src: P4img8,
            alt: 'Honey',
            id: 7,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img8, width: 320, height: 213 },
            ]
        },
        {
            src: P4img9,
            alt: 'Honey',
            id: 8,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img9, width: 320, height: 213 },
            ]
        },
        {
            src: P4img10,
            alt: 'Honey',
            id: 9,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P4img10, width: 320, height: 213 },
            ]
        },

    ],
    id: 3,
    img: P4logo,
    title: "Профессиональный электромонтаж в 2-комнатной квартире в Краснослободске",
    description: "",
    html: <div>
        <h1>Профессиональный электромонтаж в 2-комнатной квартире в Краснослободске</h1>
        <StandardImageList />
        <p>
            Мы рады представить успешно выполненный проект по электромонтажу в уютной 2-комнатной квартире площадью 63 квадратных метра в Краснослободске. Наша команда профессионалов обеспечила качественную установку электрической системы, которая полностью соответствует потребностям и пожеланиям заказчика.
        </p>
        <h3>
            Работа с кабелем и подрозетниками
        </h3>
        <p>
            Мы проложили 330 метров кабеля, обеспечив эффективное и безопасное электрооборудование в каждой комнате квартиры. Выполнили 48 отверстий под подрозетники с максимальной аккуратностью и точностью, чтобы обеспечить надежное крепление и комфортное использование электрических устройств.
        </p>
        <h3>
            Штробы под кабель и распределительные коробки
        </h3>
        <p>
            Наши опытные специалисты сделали 44 метра штроб под кабель, скрыв его от глаз, что придало интерьеру квартиры эстетичный вид. Мы также установили 16 распределительных коробок, обеспечив безопасность и эффективное распределение электроэнергии.
        </p>
        <h3>
            Установка наружного щита и подрозетников
        </h3>
        <p>
            Мы произвели монтаж наружного щита на 24 модуля, что обеспечило удобный доступ и защиту электрооборудования. Также были установлены 39 подрозетников, гармонично вписывающихся в дизайн помещений.
        </p>
        <h3>
            Доступная стоимость и высокое качество
        </h3>
        <p>
            Мы всегда стараемся предложить нашим клиентам оптимальное соотношение цены и качества. Стоимость этой работы составила 46.000 рублей, что подтверждает нашу ответственность и профессионализм в каждом выполненном проекте.
        </p>
        <p>
            Если вам необходимы надежные электромонтажные работы в вашей квартире или доме в Краснослободске, обращайтесь к нам по номеру 8-909-383-99-46. Наша команда готова помочь вам реализовать все ваши электромонтажные потребности с максимальной точностью и профессионализмом!
        </p>
    </div>
},]

function CardList() {
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