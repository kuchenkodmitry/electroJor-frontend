import Text from "@mui/material/Typography"
import style from "./reviews.module.css"
import WebFont from 'webfontloader';
import { useEffect, useContext } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LightImg from "./img/lightPic.png"
import { Block } from "@mui/icons-material";
import Img1 from './img/1.png'
import Img2 from './img/2.png'
import Img3 from './img/3.png'
import Img4 from './img/4.png'
import Img5 from './img/5.png'
import Img6 from './img/6.png'
import Img7 from './img/7.png'
import Img8 from './img/8.png'
import {GallaryOpen, GallaryIndex, GallaryContext} from "../context"



const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
};

const imgData = [
    {
        src: Img1,
        alt: 'Breakfast',
        id: 0,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img1, width: 320, height: 213 },
        ]
    },
    {
        src: Img2,
        alt: 'Burger',
        id: 1,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img2, width: 320, height: 213 },
        ]
    },
    {
        src: Img3,
        alt: 'Camera',
        id: 2,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img3, width: 320, height: 213 },
        ]
    },
    {
        src: Img4,
        alt: 'Coffee',
        id: 3,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img4, width: 320, height: 213 },
        ]
    },
    {
        src: Img5,
        alt: 'Hats',
        id: 4,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img5, width: 320, height: 213 },
        ]
    },
    {
        src: Img6,
        alt: 'Honey',
        id: 5,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img6, width: 320, height: 213 },
        ]
    },
    {
        src: Img7,
        alt: 'Honey',
        id: 6,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img7, width: 320, height: 213 },
        ]
    },
    {
        src: Img8,
        alt: 'Honey',
        id: 7,
        width: 3840,
        height: 2560,
        srcSet: [
            { src: Img8, width: 320, height: 213 },
        ]
    }
];

const Gallery = () => {
    const [gallaryContext, setGallaryContext] = useContext(GallaryContext)
    const [gallaryOpen, setGallaryOpen] = useContext(GallaryOpen);
    const [gallaryIndex, setGallaryIndex] = useContext (GallaryIndex);
    const items = [
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(0); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img1}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(1); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img2}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(2); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img3}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(3); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img4}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(4); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img5}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(5); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img6}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(6); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img7}/>,
        <img onClick={()=> {setGallaryContext(imgData) ;setGallaryIndex(7); setGallaryOpen(true);}} draggable="false" style={{margin: "0 auto", }} className={style.images} src={Img8}/>
    ];

    const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
        return items.map((item, i) => (
            <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
                {item}
            </div>
        ));
    };

    const DataImg = {
        gallary: []
    }

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls='false'
        />)
};

function WorkExamples() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins']
            }
        });
    }, []);
    return (
        <div>
            <div className={style.rewiewsBlock}>
            <Text sx={{
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
                letterSpacing: "4px",
                width: "700px",
                marginTop: "70px",
                display: {xs: "none", md: "flex"}
            }}>Что наши клиенты думают о нас наши клиенты ?</Text>
             <Text sx={{
                color: "#000",
                textAlign: "right",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "normal",
                letterSpacing: "4px",
                width: "300px",
                marginTop: "70px",
                display: {xs: "flex", md: "none"}
            }}>Что думают о нас наши клиенты</Text>

            <img style={{position:"relative", top:"-2px"}} src={LightImg} alt="" />
        </div >
        <div className={style.galaryBlock}>
        <Gallery/>
        </div>
        </div>
    )
}
export default WorkExamples;