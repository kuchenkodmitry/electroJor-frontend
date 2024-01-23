import './App.css';
import AppBar from './components/header/appBar.jsx';
import InfoHeader from './components/header/headerInfo';
import ServiceCard from './components/serviceCard/serviceCard';
import Callback1 from './components/callback/callback1'
import Scheme from "./components/Scheme/Scheme"
import WorkExamples from './components/workExamples/workExamples';
import Reviews from "./components/reviews/reviews"
import About from "./components/about/about"
import CallBackBottom from './components/callback/callBack3';
import Footer from "./components/footer/footer"
import { GallaryContext,ModalContext, Context, GallaryIndex, GallaryOpen } from './components/context';
import React, { useState } from "react";
import Modal from "./components/modal/modal"
import Gallary from './components/PhotoGallary/gallary';
import TestMap from './textMap.jsx';
import MyGallery from './components/gallary/gallary.jsx';
import {MyComponent} from "./components/motion/motion.jsx"
import { fadeIn } from 'react-animations'



function App() {
  const [modalContext, setModalContext] = useState(["null"])
  const [context, setContext] = useState(false);
  const [gallaryContext, setGallaryContext] = useState([null]);
  const [gallaryIndex, setGallaryIndex] = useState([null]);
  const [gallaryOpen, setGallaryOpen] = useState(false);
  return (
    <>
    <Context.Provider value={[context, setContext]}>
    <ModalContext.Provider value={[modalContext, setModalContext]}>
    <GallaryContext.Provider value={[gallaryContext, setGallaryContext]}>
    <GallaryIndex.Provider value={[gallaryIndex, setGallaryIndex]}>
    <GallaryOpen.Provider value={[gallaryOpen, setGallaryOpen]}>
    <TestMap/>
    <Gallary />
    <Modal/>
    <AppBar/>
    <InfoHeader/>
    <ServiceCard/>
    <Callback1/>
    <Scheme/>
    <WorkExamples/>
    <Reviews/>
    <About/>
    <CallBackBottom/>
    <Footer/>
    </GallaryOpen.Provider>
    </GallaryIndex.Provider>
    </GallaryContext.Provider>
    </ModalContext.Provider>
    </Context.Provider>
    </>
  );
}

export default App;
