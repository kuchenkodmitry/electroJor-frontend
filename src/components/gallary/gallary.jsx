// import { Carousel } from 'react-carousel-minimal';
import { GallaryOpen, GallaryIndex, GallaryContext } from "../context"
import { useContext } from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s from './stylaGallery.module.css'

function App({ photoList }) {
  const [gallaryOpen, setGallaryOpen] = useContext(GallaryOpen);
  const [gallaryIndex, setGallaryIndex] = useContext(GallaryIndex);
  const [gallaryContext, setGallaryContext] = useContext(GallaryContext);

  const slides = photoList.map((url) => ({ src: url }));

  const objectData = photoList.map((e, index) => {
    return (
      <div key={index} className={s.sizingPhoto}>
        <img
          src={e}
          onClick={() => {
            setGallaryContext(slides);
            setGallaryIndex(index);
            setGallaryOpen(true);
          }}
        />
      </div>
    );
  });

  return (
    <div>
      <Carousel
        className={s.caruselSize}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        dynamicHeight
      >
        {objectData}
      </Carousel>
    </div>
  );
}

export default App;