// import Text from "@mui/material/Typography"
import style from "./workExamples.module.css"
import turnOnImg from "./img/switch_pic 1.png"
import Text from "@mui/material/Typography"
import WebFont from 'webfontloader';
import { useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Images from "./img/switch_pic 1.png"
import CardList from "./CardListWorkExamples";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
};



const Gallery = () => {
    const items = [
        <img src={Images} onDragStart={handleDragStart} role="presentation" />,
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

function WorkExamples () {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Poppins']
          }
        });
       }, []);
    return(
    <div className={style.WorkExamplesBlock}>
    <img src={turnOnImg} style={{marginLeft: "1150px", marginTop: "-50px"}} alt="" />
    <h3 className="fontPoppins">
    Наши работы
    </h3>
    <Gallery/>
    </div>
    )
}
export default WorkExamples;