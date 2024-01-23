import { Carousel } from 'react-carousel-minimal';
import {GallaryOpen, GallaryIndex} from "../context"
import { useContext } from 'react';

function App(photoList) {
    let dataList = photoList.photoList
    const [gallaryOpen, setGallaryOpen] = useContext(GallaryOpen);
    const [gallaryIndex, setGallaryIndex] = useContext (GallaryIndex);
 const data = dataList

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px",
        }}>
          <Carousel
            data={data}
            time={2000}
            width="650px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              maxWidth: "650px",
              maxHeight: "550px",
              margin: "40px 0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;