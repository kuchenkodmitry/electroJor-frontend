import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useContext } from 'react';
import {GallaryContext ,ModalContext, GallaryOpen, GallaryIndex} from "../../components/context";
import s from "./imageList.module.css"

export default function StandardImageList() {
    const [modalContext, setModalContext] = useContext(ModalContext)
    const [gallaryContext, setGallaryContext] = useContext(GallaryContext)
    const [gallaryOpen, setGallaryOpen] = useContext(GallaryOpen);
    const [gallaryIndex, setGallaryIndex] = useContext (GallaryIndex);
    console.log(modalContext)
  return (
    <>
    <ImageList className={s.imageListSize} sx={{display: {xs: "none", md: "grid"}}} cols={6} rowHeight={160}>
      {gallaryContext.map((item) => (
        <ImageListItem key={item.id}>
          <img style={{cursor: "pointer"}}
            onClick={() => {
                setGallaryOpen(true);
                setGallaryIndex(item.id);
            }}
            srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
            alt={item.alt}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <ImageList className={s.imageListSize} sx={{display: {xs: "grid", md: "none"}}} cols={3} rowHeight={150}>
      {gallaryContext.map((item) => (
        <ImageListItem key={item.id}>
          <img style={{cursor: "pointer"}}
            onClick={() => {
                setGallaryOpen(true);
                setGallaryIndex(item.id);
            }}
            srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
            alt={item.alt}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}


