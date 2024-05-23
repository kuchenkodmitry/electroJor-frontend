// import { Carousel } from 'react-carousel-minimal';
import { GallaryOpen, GallaryIndex } from "../context"
import { useContext } from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s from './stylaGallery.module.css'

function App({ photoList }) {
  const [gallaryOpen, setGallaryOpen] = useContext(GallaryOpen);
  const [gallaryIndex, setGallaryIndex] = useContext(GallaryIndex);
  let data = [];
  const objectData = photoList.map((e) => {
    return (
      <div className={s.sizingPhoto} >
        <img style={{
          // minHeight: "10px",
          maxHeight: "fit-content",
          MaxWidth: "auto",
          // minWidth: "auto",
          // display: "flex"
          

        }} src={e} />
      </div>
    )
  })
  return (
    <div style={{
      // maxHeight: "30%",
      // minWidth: "70%"
    }}>
      <Carousel className={s.caruselSize}>
      {objectData}
    </Carousel>
    </div>
  );
}

export default App;