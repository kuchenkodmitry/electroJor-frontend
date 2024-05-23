import * as React from 'react';
import Box from '@mui/material/Box';
import ReactMarkdown from "react-markdown"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalContext, Context } from '../context';
import { useContext } from 'react';
import s from "./modal.module.css"
import axios from '../../axios/axios'
import MyGallery from '../gallary/gallary'


const style = {
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [context, setContext] = useContext(Context);
  const [modalContext, setModalContext] = useContext(ModalContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(context)
  }, [context])
  React.useEffect(() => {
    if (open == false) {
      setContext(false)
    }
  }, [open])

  const { title, imageUrl, text, gallaryUrl } = modalContext

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
            <Typography
              sx={{
                fontFamily: "SourceCodePro-SemiBold",
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                textTransform: "uppercase",
              }}
              className={s.styleTitle}
            >
              {title}
            </Typography>
            <div onClick={handleClose} className={s.closeBtn}>
              <div className={s.mobileView}>Закрыть</div>
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" />
              </svg>
            </div>
          </div>
          <div className={s.contentSize}>
            <MyGallery photoList={gallaryUrl} />
            <ReactMarkdown className={s.markdown} children={text} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
