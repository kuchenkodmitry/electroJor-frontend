import style from "./workExamples.module.css"
import FirstImg from "./img/1.png"

const cards = [{
            id: 0,
            img: FirstImg,
            title: "Монтаж",
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
            img: "",
            title: "Монтаж",
            description: "",
        },{
            id: 4,
            img: "",
            title: "Монтаж",
            description: "",
        },{
            id: 5,
            img: "",
            title: "Монтаж",
            description: "",
        },{
            id: 6,
            img: "",
            title: "Монтаж",
            description: "",
        },{
            id: 6,
            img: "",
            title: "Монтаж",
            description: "",
        },{
            id: 7,
            img: "",
            title: "Монтаж",
            description: "",
        },{
            id: 8,
            img: "",
            title: "Монтаж",
            description: "",
        },
]

function CardList () {
    return (
    <div style={{display: "grid", gridRow: ".2fr .2fr"}}>
    {cards.map(e => {
        return(
        <div style={{backgroundImage: `url(${e.img})`}} className={style.cardBlock}>
            {e.title}
        </div>)
    })}
    </div>
    )
}

export default CardList;