import style from "./workExamples.module.css"
import { useSelector } from "react-redux";
import turnOnImg from "./img/switch.png"
import WebFont from 'webfontloader';
import { useContext, useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Box } from "@mui/material";
import VkBtn from "../buttons/vkButton";
import s from "./workExamples.module.css"
import { GallaryContext, ModalContext, Context } from "../context"
import _ from 'lodash'


function CardList() {
    const [modalContext, setModalContext] = useContext(ModalContext);
    const [context, setContext] = useContext(Context);
    const [gallaryContext, setGallryContext] = useContext(GallaryContext);
    const [countCard, setCountCard] = useState(0)
    const { posts } = useSelector(state => state.posts)
    const isLoading = posts.status == "loading"
    const text = isLoading ? [...Array(20)] : posts.items
    let elemArray = []
    let arrayCardList = [];
    let arrayCards = []
    function backgroundStyle (index) {
        if (index == 'left'){
            return s.backgroundContentOne
        }
        if (index == "central"){
            return s.backgroundContentTwo
        }
        if (index == "right" ){
            return s.backgroundContentThree
        }
    }
    let positionCard = ['left', "central", "right"]
    let q = 0;
        posts.items.map((e, index )=> {

            console.log(index == text.length-1);
            arrayCards.push(<div onClick={() => {
                    setContext(true);
                    setModalContext(e);
                    // setGallryContext(e.imgData);
                }} className={backgroundStyle(positionCard[q])}>
                    <div style={{ backgroundImage: `url(${e.imageUrl})`, backgroundSize: "cover" }} className={s.cardBlockStyle}>
                    </div>
                    <div className={s.titleFLex}>
                    <p className={s.titleSize}>{e.title == '' ? "Посмотреть проект": e.title}</p>
                    <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>) 
                q+= 1;
                if (q == 3){
                    q = 0;
                }
                                if ((index + 1) % 9 == 0 || index == text.length-1 ){
                                    console.log('вызывается');
                                    arrayCardList.push(arrayCards);
                                    arrayCards = []
                                }
                    })
for (let i in arrayCardList){
    elemArray.push(<div className={s.cardBlock}>
        {arrayCardList[i].map(e => {return (e)})}
            </div>)
}
console.log(arrayCardList)
    return elemArray
}

function CardListMobile() {
    const [modalContext, setModalContext] = useContext(ModalContext);
    const [context, setContext] = useContext(Context);
    const [gallaryContext, setGallryContext] = useContext(GallaryContext);
    const [countCard, setCountCard] = useState(0)
    const { posts } = useSelector(state => state.posts)
    const isLoading = posts.status == "loading"
    const text = isLoading ? [...Array(20)] : posts.items
    let elemArray = []
    let arrayCardList = [];
    let arrayCards = []
    function backgroundStyle (index) {
        if (index == 'left'){
            return s.backgroundContentOne
        }
        if (index == "central"){
            return s.backgroundContentTwo
        }
        if (index == "right" ){
            return s.backgroundContentThree
        }
    }
    let positionCard = ['left', "central", "right"]
    let q = 0;
        posts.items.map((e, index )=> {

            console.log(index == text.length-1);
            arrayCards.push(<div onClick={() => {
                    setContext(true);
                    setModalContext(e);
                    // setGallryContext(e.imgData);
                }} className={backgroundStyle(positionCard[q])}>
                    <div style={{ backgroundImage: `url(${e.imageUrl})`, backgroundSize: "cover" }} className={s.cardBlockStyle}>
                    </div>
                    <div className={s.titleFLex}>
                    <p className={s.titleSize}>{e.title == '' ? "Посмотреть проект": e.title}</p>
                    <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        if ((index + 1) % 4 == 0 || index == text.length-1 ){
            console.log('вызывается');
            arrayCardList.push(arrayCards);
            arrayCards = []
        }
    })
for (let i in arrayCardList){
    elemArray.push(<div className={s.cardBlock}>
        {arrayCardList[i].map(e => {return (e)})}
            </div>)
}
console.log(arrayCardList)
    return elemArray
}




const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};


const Gallery = () => {
    const items = [
        ...CardList()
    ];

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

const GalleryMobile = () => {
    const items = [
        ...CardListMobile()
    ];

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

function WorkExamples () {
    const [context, setContext] = useContext(Context);
    const [modalContext, setModalContext] = useContext(ModalContext)

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Poppins']
          }
        });
       }, []);
    return(
    <div id="works" className={style.WorkExamplesBlock}>
    <img src={turnOnImg} className={style.turnOffBtn} alt="" />
    <h3 className={style.fontPopinsH3}>
    Наши работы
    </h3>
    <Box sx={{
        display: {xs: "none" , md: "flex"}
    }}>
    <Gallery/>
    </Box>
    <Box sx={{
        display: {xs: "flex" , md: "none"}
    }}>
    <GalleryMobile/>
    </Box>
    <div className={style.vkBtnPosition}>
    <VkBtn />
    </div>
    </div>
    )
}
export default WorkExamples;