import React, { useState, useEffect, useCallback } from "react";
import axios, { API_ROOT } from '../../../axios/axios';
import style from "./edit.module.css";
import { useSelector } from "react-redux";
import {
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
  Paper,
  Alert,
  Divider,
  CircularProgress // Добавляем этот импорт
} from '@mui/material';
import { CloudUpload, Delete, ArrowBack, Save, Help, Image, } from '@mui/icons-material';
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';
import { motion } from 'framer-motion';

const EditPost = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [galleryUrls, setGalleryUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const { params } = useParams();
  const isEditing = Boolean(params?.includes('edit'));
  const idPost = params?.split('-')[1];

  // Загрузка данных поста при редактировании
  useEffect(() => {
    if (idPost) {
      setIsLoading(true);
      axios.get(`/posts/${idPost}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setDescription(data.description);
          setImageUrl(data.imageUrl);
          setGalleryUrls(data.gallaryUrl || []);
          setIsLoading(false);
        })
        .catch(err => {
          console.warn(err);
          setError("Ошибка получения статьи");
          setIsLoading(false);
        });
    }
  }, [idPost]);

  // Загрузка изображения
  const handleUploadImage = async (event, isGallery = false) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      if (file.size > 1024 * 1024) { // 1MB limit
        setError("Файл слишком большой (макс. 1MB)");
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      setIsLoading(true);
      const { data } = await axios.post('/uploads', formData);
      const url = `${API_ROOT}${data.url}`;

      if (isGallery) {
        setGalleryUrls(prev => [...prev, url]);
      } else {
        setImageUrl(url);
      }

      setSuccess("Изображение успешно загружено");
      setIsLoading(false);
    } catch (err) {
      console.warn(err);
      setError('Ошибка загрузки изображения');
      setIsLoading(false);
    }
  };

  // Удаление изображения из галереи
  const handleRemoveGalleryImage = (urlToRemove) => {
    setGalleryUrls(prev => prev.filter(url => url !== urlToRemove));
  };

  // Отправка формы
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const postData = {
        title,
        imageUrl,
        text,
        description,
        gallaryUrl: galleryUrls
      };

      const { data } = isEditing
        ? await axios.patch(`/posts/${idPost}`, postData)
        : await axios.post('/posts', postData);

      setSuccess(isEditing ? "Пост успешно обновлен" : "Пост успешно создан");
      setTimeout(() => navigate('/admin/posts'), 1500);
    } catch (err) {
      console.warn(err);
      setError('Ошибка сохранения поста');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !isEditing) {
    return (
      <Box className={style.loadingContainer}>
        <CircularProgress size={60} />
        <Typography variant="h6">Загрузка...</Typography>
      </Box>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={style.container}
    >
      <Box className={style.header}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/admin/posts')}
          className={style.backButton}
        >
          Назад
        </Button>

        <Typography variant="h4" className={style.title}>
          {isEditing ? 'Редактирование поста' : 'Создание нового поста'}
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" onClose={() => setError(null)} className={style.alert}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" onClose={() => setSuccess(null)} className={style.alert}>
          {success}
        </Alert>
      )}

      <Paper elevation={3} className={style.section}>
        <Typography variant="h6" className={style.sectionTitle}>
          Основное изображение
        </Typography>

        <Box className={style.imageSection}>
          <Box className={style.imagePreview}>
            <img
              src={imageUrl || '/no-image.jpg'}
              alt="Превью"
              className={style.previewImage}
            />
            <Typography variant="body2" className={style.imageCaption}>
              {imageUrl ? 'Текущее изображение' : 'Изображение не выбрано'}
            </Typography>
          </Box>

          <Box className={style.imageControls}>
            <input
              accept="image/*"
              id="main-image-upload"
              type="file"
              onChange={(e) => handleUploadImage(e, false)}
              hidden
            />

            <label htmlFor="main-image-upload">
              <Button
                component="span"
                variant="outlined"
                startIcon={<CloudUpload />}
                className={style.uploadButton}
                disabled={isLoading}
              >
                Загрузить
              </Button>
            </label>

            <TextField
              label="Или вставьте ссылку"
              variant="outlined"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              fullWidth
              className={style.urlInput}
            />

            <Button
              variant="outlined"
              color="error"
              startIcon={<Delete />}
              onClick={() => setImageUrl('')}
              disabled={!imageUrl || isLoading}
              className={style.deleteButton}
            >
              Удалить
            </Button>
          </Box>
        </Box>

        <Typography variant="body2" className={style.imageHint}>
          Максимальный размер файла: 1MB. Для сжатия изображений используйте{' '}
          <a href="https://www.iloveimg.com/ru/compress-image" target="_blank" rel="noopener noreferrer">
            онлайн-инструмент
          </a>.
        </Typography>
      </Paper>

      <Paper elevation={3} className={style.section}>
        <Typography variant="h6" className={style.sectionTitle}>
          Основная информация
        </Typography>

        <TextField
          label="Заголовок поста"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          className={style.textField}
        />

        <TextField
          label="Краткое описание"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={3}
          className={style.textField}
        />
      </Paper>

      <Paper elevation={3} className={style.section}>
        <Box className={style.editorHeader}>
          <Typography variant="h6" className={style.sectionTitle}>
            Содержание поста
          </Typography>

          <Button
            variant="text"
            startIcon={<Help />}
            href="https://paulradzkov.com/2014/markdown_cheatsheet/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.helpButton}
          >
            Справка по Markdown
          </Button>
        </Box>

        <MDEditor
          value={text}
          onChange={setText}
          height={500}
          preview="live"
          visibleDragbar={false}
          textareaProps={{
            placeholder: 'Введите текст поста...'
          }}
          className={style.editor}
        />
      </Paper>

      <Paper elevation={3} className={style.section}>
        <Typography variant="h6" className={style.sectionTitle}>
          Галерея изображений
        </Typography>

        <Box className={style.galleryControls}>
          <input
            accept="image/*"
            id="gallery-image-upload"
            type="file"
            onChange={(e) => handleUploadImage(e, true)}
            hidden
          />

          <label htmlFor="gallery-image-upload">
            <Button
              component="span"
              variant="outlined"
              startIcon={<Image />}
              className={style.uploadButton}
              disabled={isLoading}
            >
              Добавить в галерею
            </Button>
          </label>
        </Box>

        {galleryUrls.length > 0 ? (
          <Box className={style.galleryGrid}>
            {galleryUrls.map((url, index) => (
              <Box key={index} className={style.galleryItem}>
                <img src={url} alt={`Галерея ${index}`} className={style.galleryImage} />
                <IconButton
                  onClick={() => handleRemoveGalleryImage(url)}
                  className={style.deleteGalleryButton}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" className={style.emptyGallery}>
            В галерее пока нет изображений
          </Typography>
        )}
      </Paper>

      <Box className={style.actionButtons}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Save />}
          onClick={handleSubmit}
          disabled={isLoading || !title || !text}
          className={style.submitButton}
        >
          {isLoading ? 'Сохранение...' : 'Сохранить пост'}
        </Button>
      </Box>
    </motion.div>
  );
};

export default EditPost;