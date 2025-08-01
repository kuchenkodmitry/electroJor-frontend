import React, { useState, useEffect } from "react";
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
  CircularProgress
} from '@mui/material';
import { CloudUpload, Delete, ArrowBack, Save, Help, Image } from '@mui/icons-material';
import { useNavigate, useParams } from "react-router-dom";
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

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

  const handleUploadImage = async (event, isGallery = false) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

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

  const handleRemoveGalleryImage = (urlToRemove) => {
    setGalleryUrls(prev => prev.filter(url => url !== urlToRemove));
  };

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

  const onImageUpload = (file) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
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
    <div className={style.container}>
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
          <Box className={style.imagePreview} style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}>
            <div className={style.imageBlur}></div>
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
          Изображения до 50MB принимаются без ограничений. Файл будет оптимизирован автоматически.
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

        <MdEditor
          value={text}
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setText(text)}
          onImageUpload={onImageUpload}
          imageAccept=".jpg,.jpeg,.png,.gif"
          config={{
            view: {
              menu: true,
              md: true,
              html: false
            },
            canView: {
              fullScreen: false,
              hideMenu: false
            }
          }}
          placeholder="Введите текст поста..."
          className={style.mobileEditor}
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
              <Box key={index} className={style.galleryItem} style={{ backgroundImage: `url(${url})` }}>
                <div className={style.galleryBlur}></div>
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
    </div>
  );
};

export default EditPost;