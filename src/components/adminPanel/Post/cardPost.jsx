import { Typography } from "@mui/material"
import style from './style.module.css'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchPostRemove } from "../../../redux/slices/posts"
import { useEffect, useState } from "react"

function CardPost({ title, description, UrlImage, id }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isVertical, setIsVertical] = useState(false)

    useEffect(() => {
        // Проверяем ориентацию изображения при загрузке
        const img = new Image()
        img.src = UrlImage
        img.onload = function () {
            setIsVertical(this.height > this.width * 1.2) // Добавляем пороговое значение
        }
        img.onerror = () => {
            setIsVertical(false)
        }
    }, [UrlImage])

    const handleNavPost = () => {
        navigate(`/admin/fullpost-${id}`)
    }

    const onClickRemove = () => {
        const result = window.confirm("Уверены, что хотите удалить?")
        if (result) {
            dispatch(fetchPostRemove(id))
            alert("Пост удалён")
            navigate('/admin/posts')
        }
    }

    const onClickEdit = () => {
        navigate(`/admin/edit-${id}`)
    }

    return (
        <div className={style.cardBlock}>
            <div
                className={`${style.imageContainer} ${isVertical ? style.vertical : ''}`}
                style={{ backgroundImage: `url(${UrlImage})` }}
            >
                <img
                    src={UrlImage}
                    alt={title}
                    className={style.cardImage}
                    onError={(e) => {
                        e.target.style.display = 'none' // Скрываем изображение если не загрузилось
                    }}
                />
            </div>
            <div className={style.cardContent}>
                <div className={style.textContent}>
                    <Typography onClick={handleNavPost} className={style.cardTitle}>
                        {title}
                    </Typography>
                    <Typography className={style.cardDescription}>
                        {description}
                    </Typography>
                </div>
                <div className={style.btnBox}>
                    <button onClick={onClickRemove} className={style.btnRemove}>Удалить</button>
                    <button onClick={onClickEdit} className={style.btnEdit}>Изменить</button>
                </div>
            </div>
        </div>
    )
}

export default CardPost