import style from './style.module.css';
import { useEffect } from 'react';
import CardPost from "./cardPost";
import { Typography, Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/slices/posts';
import PostLoading from '../skeleton/skeleton';
import { Add } from '@mui/icons-material';
import { motion } from 'framer-motion';

function CardList() {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    const isLoadingPosts = posts.status === 'loading';

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Typography variant="h4" className={style.title}>
                    Управление постами
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    className={style.createButton}
                    href="/admin/create"
                >
                    Новый пост
                </Button>
            </div>

            <Grid container spacing={3} className={style.postsGrid}>
                {(isLoadingPosts ? [...Array(9)] : posts.items).map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} key={isLoadingPosts ? index : post.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {isLoadingPosts ? (
                                <PostLoading />
                            ) : (
                                <CardPost
                                    id={post.id}
                                    title={post.title}
                                    UrlImage={post.imageUrl}
                                    description={post.description}
                                />
                            )}
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default CardList;