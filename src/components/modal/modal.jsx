import * as React from 'react';
import Box from '@mui/material/Box';
import ReactMarkdown from "react-markdown";
import Modal from '@mui/material/Modal';
import { ModalContext, Context } from '../context';
import { useContext } from 'react';
import s from "./modal.module.css";
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw'

const style = {
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function EnhancedModal() {
  const [context, setContext] = useContext(Context);
  const [modalContext, setModalContext] = useContext(ModalContext);
  const [open, setOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(context)
  }, [context]);

  React.useEffect(() => {
    if (open === false) {
      setContext(false)
    }
  }, [open]);

  const { title, text, gallaryUrl } = modalContext;

  const slides = gallaryUrl?.map(url => ({
    src: url,
    alt: title
  })) || [];

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.modalSize} sx={style}>
          <div className={s.positionUpperCase}>
            <h2 className={s.styleTitle}>
              {title}
            </h2>
            <button onClick={handleClose} className={s.closeBtn}>
              <span className={s.mobileView}>Закрыть</span>
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className={s.contentSize}>
            {slides.length > 0 && (
              <div className={s.galleryContainer}>
                {/* Основное изображение с кнопками перелистывания */}
                <div className={s.mainImageContainer}>
                  <img
                    src={slides[currentImageIndex].src}
                    alt={slides[currentImageIndex].alt || `Image ${currentImageIndex + 1}`}
                    className={s.mainImage}
                    onClick={() => handleImageClick(currentImageIndex)}
                  />
                  <button className={s.navButtonLeft} onClick={prevImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className={s.navButtonRight} onClick={nextImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* Миниатюры */}
                <div className={s.thumbnailsContainer}>
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`${s.thumbnail} ${index === currentImageIndex ? s.activeThumbnail : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt || `Thumbnail ${index + 1}`}
                        className={s.thumbnailImage}
                      />
                    </div>
                  ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                  open={isLightboxOpen}
                  close={() => setIsLightboxOpen(false)}
                  slides={slides}
                  index={lightboxIndex}
                  plugins={[Zoom, Thumbnails]}
                  animation={{ swipe: 200 }}
                />
              </div>
            )}

            <div className={s.textContent}>
              <ReactMarkdown
                className={s.markdown}
                children={text}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}