import { Typography } from "@mui/material"
import style from './style.module.css'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchPostRemove } from "../../../redux/slices/posts"

function CardPost({ title, description, UrlImage, id }) {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavPost = () => {
        Navigate(`/admin/fullpost-${id}`)
    }

    const onClickRemove = () => {
        const result = window.confirm("Уверены, что хотите удалить ?");
        if (result) {
            alert("Пост удалён")
            dispatch(fetchPostRemove(id))
            Navigate('/admin/posts')
        } else {
            alert("удаление отменено")
        }
    };

    const onClickEdit = () => {
        Navigate(`/admin/edit-${id}`)
    }

    return (
        <div className={style.cardBlock}>
            <div
                className={`${style.imageContainer} ${style.hasSpace}`}
                style={{ backgroundImage: `url(${UrlImage})` }}
            >
                <img src={UrlImage} alt={title} />
            </div>
            <div className={style.cardContent}>
                <Typography onClick={handleNavPost} className={style.cardTitle}>
                    {title}
                </Typography>
                <Typography className={style.cardDescription}>
                    {description}
                </Typography>
                <div className={style.btnBox}>
                    <button onClick={onClickRemove} className={style.btnEdit}>Удалить</button>
                    <button onClick={onClickEdit} className={style.btnEdit}>Изменить</button>
                </div>
            </div>
        </div>
    )
}

export default CardPost