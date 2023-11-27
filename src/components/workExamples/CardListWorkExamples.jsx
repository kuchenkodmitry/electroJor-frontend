import style from "./workExamples.module.css"
import FirstImg from "./img/1.png"

const cards = [{
            id: 0,
            img: FirstImg,
            title: "Монтаж Потолка",
            description: "",
        },
        {
            id: 1,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 2,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 3,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 4,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 5,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 6,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 6,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        },{
            id: 7,
            img: FirstImg,
            title: "Монтаж",
            description: "",
        }
]

function CardList () {
    return (
    <div className={style.cardBlock}>
    {cards.map(e => {
        return(
        <div style={{backgroundImage: `url(${e.img})`}} className={style.cardBlockStyle}>
            <p style={{marginTop: "0px", marginBottom: "0px", height: "61px"}} className={style.titleStyle}>{e.title}</p>
        </div>)
    })}
    </div>
    )
}

export default CardList;