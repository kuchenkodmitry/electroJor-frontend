import style from './cardList.module.css';
import { useEffect } from 'react';
import CardPost from "./cardPost";
import { Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { fetchPosts } from '../../../redux/slices/posts';
import PostLoading from '../Skeleton/skeleton';
import { Add } from '@mui/icons-material';
import { motion } from 'framer-motion';

function CardList() {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    const isLoadingPosts = posts.status === 'loading';
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className={style.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={style.headerContainer}
            >
                <div className={style.header}>
                    <Typography variant="h4" className={style.title}>
                        Управление постами
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        className={style.createButton}
                        component={RouterLink}
                        to="/admin/create"
                        sx={{
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 500,
                            height: '44px'
                        }}
                    >
                        {!isMobile && 'Новый пост'}
                    </Button>
                </div>
                <Typography variant="body2" className={style.subtitle}>
                    {posts.items?.length} {posts.items?.length === 1 ? 'пост' : 'постов'}
                </Typography>
            </motion.div>

            <Grid
                container
                spacing={3}
                className={style.postsGrid}
                sx={{
                    marginTop: '8px',
                    paddingBottom: '24px'
                }}
            >
                {(isLoadingPosts ? [...Array(9)] : posts.items).map((post, index) => (
                    <Grid
                        item
                        xs={15}
                        sm={6}
                        md={4}
                        lg={4}
                        key={isLoadingPosts ? index : post.id}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
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