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

function App() {
  return (
    <>
    <AppBar/>
    <InfoHeader/>
    <ServiceCard/>
    <Callback1/>
    <Scheme/>
    <WorkExamples/>
    <Reviews/>
    <About/>
    <CallBackBottom/>
    </>
  );
}

export default App;
