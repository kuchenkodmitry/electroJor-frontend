import * as React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import { ModalContext, Context } from '../context';
import { useContext } from 'react';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import ReactMarkdown from 'react-markdown';
import s from "./modal.module.css";

const PostModal = () => {
  const [context, setContext] = useContext(Context);
  const [modalContext] = useContext(ModalContext);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const { title, text, gallaryUrl = [] } = modalContext || {};

  const handleClose = () => {
    setContext(false);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallaryUrl.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallaryUrl.length) % gallaryUrl.length);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Modal
      open={context}
      onClose={handleClose}
      aria-labelledby="post-modal-title"
      aria-describedby="post-modal-description"
    >
      <Box className={s.modalContainer}>
        {/* Шапка модального окна */}
        <div className={s.modalHeader}>
          <Typography variant="h4" className={s.modalTitle}>
            {title}
          </Typography>
          <IconButton onClick={handleClose} className={s.closeButton}>
            <Close />
          </IconButton>
        </div>

        {/* Основное содержимое */}
        <div className={s.modalContent}>
          {/* Галерея изображений */}
          {gallaryUrl.length > 0 && (
            <div className={s.gallerySection}>
              <div className={s.mainImageWrapper}>
                <img
                  src={gallaryUrl[currentImageIndex]}
                  alt={`Изображение ${currentImageIndex + 1}`}
                  className={s.mainImage}
                  onClick={() => openLightbox(currentImageIndex)}
                />

                {gallaryUrl.length > 1 && (
                  <>
                    <IconButton
                      className={s.navButton}
                      onClick={handlePrevImage}
                      style={{ left: 10 }}
                    >
                      <NavigateBefore />
                    </IconButton>
                    <IconButton
                      className={s.navButton}
                      onClick={handleNextImage}
                      style={{ right: 10 }}
                    >
                      <NavigateNext />
                    </IconButton>
                  </>
                )}
              </div>

              {/* Миниатюры */}
              {gallaryUrl.length > 1 && (
                <div className={s.thumbnailsContainer}>
                  {gallaryUrl.map((url, index) => (
                    <div
                      key={index}
                      className={`${s.thumbnail} ${index === currentImageIndex ? s.activeThumbnail : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={url}
                        alt={`Миниатюра ${index + 1}`}
                        className={s.thumbnailImage}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Текст поста */}
          <div className={s.textSection}>
            <ReactMarkdown className={s.markdownContent}>
              {text}
            </ReactMarkdown>
          </div>
        </div>

        {/* Лайтбокс для полноэкранного просмотра */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={gallaryUrl.map(url => ({ src: url }))}
          index={currentImageIndex}
          plugins={[Zoom]}
        />
      </Box>
    </Modal>
  );
};

export default PostModal;