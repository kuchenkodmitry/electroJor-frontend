import style from "./workExamples.module.css"
import FirstImg from "./img/1.png"
import { GallaryContext, ModalContext, Context } from "../context"
import { useContext } from "react"
import StandardImageList from "../imageList/imageList"
import P1img1 from "./img/pojects/1/1.jpg"
import P1img2 from "./img/pojects/1/2.jpg"
import P1img3 from "./img/pojects/1/3.jpg"
import P1img4 from "./img/pojects/1/4.jpg"
import P1logo from "./img/pojects/1/logo.jpg"

import P2img1 from "./img/pojects/2/1.jpg"
import P2img2 from "./img/pojects/2/2.jpg"
import P2img3 from "./img/pojects/2/3.jpg"
import P2img4 from "./img/pojects/2/4.jpg"
import P2logo from "./img/pojects/2/logo.jpg"

import P3img1 from "./img/pojects/3/1.jpg"
import P3img2 from "./img/pojects/3/2.jpg"
import P3img3 from "./img/pojects/3/3.jpg"
import P3img4 from "./img/pojects/3/4.jpg"
import P3img5 from "./img/pojects/3/5.jpg"
import P3logo from "./img/pojects/3/logo.jpg"

import P4img1 from "./img/pojects/4/1.jpg"
import P4img2 from "./img/pojects/4/2.jpg"
import P4img3 from "./img/pojects/4/3.jpg"
import P4img4 from "./img/pojects/4/4.jpg"
import P4img5 from "./img/pojects/4/5.jpg"
import P4logo from "./img/pojects/4/logo.jpg"

import P5img1 from "./img/pojects/5/1.jpg"
import P5img2 from "./img/pojects/5/2.jpg"
import P5img3 from "./img/pojects/5/3.jpg"
import P5img4 from "./img/pojects/5/4.jpg"
import P5img5 from "./img/pojects/5/5.jpg"
import P5logo from "./img/pojects/5/logo.jpg"

import P6img1 from "./img/pojects/6/1.jpg"
import P6img2 from "./img/pojects/6/2.jpg"
import P6img3 from "./img/pojects/6/3.jpg"
import P6img4 from "./img/pojects/6/4.jpg"
import P6img5 from "./img/pojects/6/5.jpg"
import P6img6 from "./img/pojects/6/6.jpg"
import P6img7 from "./img/pojects/6/7.jpg"
import P6img8 from "./img/pojects/6/8.jpg"
import P6logo from "./img/pojects/6/logo.jpg"

import P7img1 from "./img/pojects/7/1.jpg"
import P7img2 from "./img/pojects/7/2.jpg"
import P7img3 from "./img/pojects/7/3.jpg"
import P7img4 from "./img/pojects/7/4.jpg"
import P7img5 from "./img/pojects/7/5.jpg"
import P7img6 from "./img/pojects/7/6.jpg"
import P7img7 from "./img/pojects/7/7.jpg"
import P7img8 from "./img/pojects/7/8.jpg"
import P7logo from "./img/pojects/7/logo.jpg"

import P8img1 from "./img/pojects/8/1.jpg"
import P8img2 from "./img/pojects/8/2.jpg"
import P8img3 from "./img/pojects/8/3.jpg"
import P8img4 from "./img/pojects/8/4.jpg"
import P8img5 from "./img/pojects/8/5.jpg"
import P8img6 from "./img/pojects/8/6.jpg"
import P8img7 from "./img/pojects/8/7.jpg"
import P8logo from "./img/pojects/8/logo.jpg"

import P9img1 from "./img/pojects/9/1.jpg"
import P9img2 from "./img/pojects/9/2.jpg"
import P9img3 from "./img/pojects/9/3.jpg"
import P9img4 from "./img/pojects/9/4.jpg"
import P9img5 from "./img/pojects/9/5.jpg"
import P9img6 from "./img/pojects/9/6.jpg"
import P9logo from "./img/pojects/9/logo.jpg"

import P10img1 from "./img/pojects/10/1.jpg"
import P10img2 from "./img/pojects/10/2.jpg"
import P10img3 from "./img/pojects/10/3.jpg"
import P10img4 from "./img/pojects/10/4.jpg"
import P10img5 from "./img/pojects/10/5.jpg"
import P10img6 from "./img/pojects/10/6.jpg"
import P10logo from "./img/pojects/10/logo.jpg"

import P11img1 from "./img/pojects/11/1.jpg"
import P11img2 from "./img/pojects/11/2.jpg"
import P11img3 from "./img/pojects/11/3.jpg"
import P11img4 from "./img/pojects/11/4.jpg"
import P11img5 from "./img/pojects/11/5.jpg"
import P11img6 from "./img/pojects/11/6.jpg"
import P11img7 from "./img/pojects/11/7.jpg"
import P11img8 from "./img/pojects/11/8.jpg"
import P11img9 from "./img/pojects/11/9.jpg"
import P11logo from "./img/pojects/11/logo.jpg"

import P12img1 from "./img/pojects/12/1.jpg"
import P12img2 from "./img/pojects/12/2.jpg"
import P12img3 from "./img/pojects/12/3.jpg"
import P12img4 from "./img/pojects/12/4.jpg"
import P12img5 from "./img/pojects/12/5.jpg"
import P12img6 from "./img/pojects/12/6.jpg"
import P12img7 from "./img/pojects/12/7.jpg"
import P12logo from "./img/pojects/12/logo.jpg"

import P13img1 from "./img/pojects/13/1.jpg"
import P13img2 from "./img/pojects/13/2.jpg"
import P13img3 from "./img/pojects/13/3.jpg"
import P13img4 from "./img/pojects/13/4.jpg"
import P13img5 from "./img/pojects/13/5.jpg"
import P13img6 from "./img/pojects/13/6.jpg"
import P13img7 from "./img/pojects/13/7.jpg"
import P13img8 from "./img/pojects/13/8.jpg"
import P13img9 from "./img/pojects/13/9.jpg"
import P13logo from "./img/pojects/13/logo.jpg"


let cards = [{
    imgData: [
        {
            src: P1img1,
            alt: '',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img1, width: 320, height: 213 },
            ]
        },
        {
            src: P1img2,
            alt: '',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img2, width: 320, height: 213 },
            ]
        },
        {
            src: P1img3,
            alt: '',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img3, width: 320, height: 213 },
            ]
        },
        {
            src: P1img4,
            alt: '',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P1img4, width: 320, height: 213 },
            ]
        },
    ],
    id: 0,
    img: P1logo,
    title: "",
    description: "",
    html: ""
}, {
    imgData: [
        {
            src: P2img1,
            alt: '',
            id: 0,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img1, width: 320, height: 213 },
            ]
        },
        {
            src: P2img2,
            alt: '',
            id: 1,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img2, width: 320, height: 213 },
            ]
        },
        {
            src: P2img3,
            alt: '',
            id: 2,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img3, width: 320, height: 213 },
            ]
        },
        {
            src: P2img4,
            alt: '',
            id: 3,
            width: 3840,
            height: 2560,
            srcSet: [
                { src: P2img4, width: 320, height: 213 },
            ]
        }
    ],
    id: 1,
    img: P2logo,
    title: "",
    description: "",
    html: ""
}, {
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
    html: ""
},

]

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
                    }} style={{ background: `url(${e.img})`, backgroundSize: "130%", backgroundPosition: "center" }} className={style.cardBlockStyle}>
                        <p style={{ marginTop: "0px", marginBottom: "0px", height: "75px", borderRadius: "30px 30px 0 0" }} className={style.titleStyle}>{e.title}</p>
                    </div>)
            })}
        </div>
    )
}

export default CardList;