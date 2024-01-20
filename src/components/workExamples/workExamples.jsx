// import Text from "@mui/material/Typography"
import style from "./workExamples.module.css"
import turnOnImg from "./img/switch_pic 1.png"
import Text from "@mui/material/Typography"
import WebFont from 'webfontloader';
import { useContext, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CardList from "./CardListWorkExamples";
// import CardMobile from "./CardListWorkExamplesMobile";
// import CardMobile2 from "./CardListWorkExamplesMobile2";
import { Box } from "@mui/material";
import { ModalContext, Context } from "../context";
import VkBtn from "../buttons/vkButton";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 3 },
};


const Gallery = () => {
    const items = [
        <CardList/>
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
        // <CardMobile/>,
        // <CardMobile2/>
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