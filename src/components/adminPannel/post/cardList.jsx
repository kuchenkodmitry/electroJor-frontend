import style from './style.module.css'
import { useEffect } from 'react';
import CardPost from "./cardPost"
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchPosts } from '../../../redux/slices/posts'
import PostLoading from '../skeleton/skeleton';

function CardList() {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts)
    const isLoadingPosts = posts.status === 'loading';

    useEffect(() => {
        dispatch(fetchPosts()) //Производим экщон (параметр функция из слайса постс);
      },[])


    return ( 
    <>
    <Typography sx={{
        fontFamily: "SourceCodePro-SemiBold",
        fontSize: "24px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "left",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "27px",
        marginBottom: "60px"
    }}>
    Редактирование и удаление постов
    </Typography>
    <div className={style.listBlock}>
    {(isLoadingPosts? [...Array(9)] : posts.items).map(e => isLoadingPosts?  
    <PostLoading/> : <CardPost 
    _id={e._id}
    title={e.title}
    UrlImage={e.imageUrl}
    description={e.description}
    />
    )}
    </div>
    </>
    )
}

export default CardList