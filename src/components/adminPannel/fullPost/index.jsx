import React from "react";
import axios from "../../../axios/axios";
import { useParams } from "react-router-dom";
import { Typography, Box, CircularProgress, Container } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import { ElectricBolt, ErrorOutline } from "@mui/icons-material";
import style from "./style.module.css";

function FullPost() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [postData, setPostData] = React.useState(null);
    const { params } = useParams();
    const _id = params.split("-")[1];

    React.useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`/posts/${_id}`);
                setPostData(res.data);
            } catch (err) {
                setError(err.message || "Не удалось загрузить пост");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [_id]);

    const renderContent = () => {
        if (isLoading) {
            return (
                <Box className={style.loadingContainer}>
                    <CircularProgress size={60} thickness={4} color="primary" />
                    <Typography variant="h6" className={style.loadingText}>
                        Загрузка поста...
                    </Typography>
                </Box>
            );
        }

        if (error) {
            return (
                <Box className={style.errorContainer}>
                    <ErrorOutline className={style.errorIcon} />
                    <Typography variant="h5" className={style.errorText}>
                        Ошибка загрузки
                    </Typography>
                    <Typography variant="body1" className={style.errorDescription}>
                        {error}
                    </Typography>
                </Box>
            );
        }

        if (!postData) {
            return (
                <Box className={style.emptyContainer}>
                    <ElectricBolt className={style.emptyIcon} />
                    <Typography variant="h5" className={style.emptyText}>
                        Пост не найден
                    </Typography>
                </Box>
            );
        }

        return (
            <Container maxWidth="md" className={style.postContainer}>
                <Typography variant="h2" className={style.postTitle}>
                    {postData.title}
                </Typography>

                {postData.imageUrl && (
                    <Box className={style.imageContainer}>
                        <img
                            src={postData.imageUrl}
                            alt={postData.title}
                            className={style.postImage}
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </Box>
                )}

                {postData.description && (
                    <Typography variant="subtitle1" className={style.postDescription}>
                        {postData.description}
                    </Typography>
                )}

                <Box className={style.markdownContainer}>
                    <ReactMarkdown
                        children={postData.text}
                        components={{
                            img: ({ node, ...props }) => (
                                <img {...props} style={{ maxWidth: '100%', borderRadius: '8px' }} alt="" />
                            ),
                            h1: ({ node, ...props }) => (
                                <Typography variant="h3" {...props} className={style.markdownHeading} />
                            ),
                            h2: ({ node, ...props }) => (
                                <Typography variant="h4" {...props} className={style.markdownHeading} />
                            ),
                            p: ({ node, ...props }) => (
                                <Typography variant="body1" {...props} className={style.markdownParagraph} />
                            ),
                        }}
                    />
                </Box>
            </Container>
        );
    };

    return (
        <div className={style.root}>
            {renderContent()}
        </div>
    );
}

export default FullPost;