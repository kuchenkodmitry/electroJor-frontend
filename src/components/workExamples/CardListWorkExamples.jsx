import style from "./workExamples.module.css"
import { GallaryContext, ModalContext, Context } from "../context"
import { useContext } from "react"
import StandardImageList from "../imageList/imageList"
import Cards from './cardList'

function CardList() {
    const [modalContext, setModalContext] = useContext(ModalContext);
    const [context, setContext] = useContext(Context);
    const [gallaryContext, setGallryContext] = useContext(GallaryContext);

    return (
        <>
        </>
    )
}

export default CardList;

{/* <div className={style.cardBlock}>
            {Cards.map(e => {
                return (
                    <div onClick={() => {
                        setContext(true);
                        setModalContext(e.html);
                        setGallryContext(e.imgData);
                    }} style={{ background: `url(${e.img})`, backgroundSize: "130%", backgroundPosition: "center" }} className={style.cardBlockStyle}>
                        <p style={{ marginTop: "0px", marginBottom: "0px", height: "75px", borderRadius: "30px 30px 0 0" }} className={style.titleStyle}>{e.title}</p>
                    </div>)
            })}
        </div> */}