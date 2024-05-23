import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Img1 from "./images/1.jpg"
import { GallaryOpen, GallaryIndex, GallaryContext } from "../context";
import { useContext, useEffect } from "react";

const App = () => {
    const [open, setOpen] = React.useState(false);
    const [gallaryContext, setGallaryContext] = useContext(GallaryContext)
    const [gallaryOpen, setGallaryOpen] = useContext(GallaryOpen);
    const [gallaryIndex, setGallaryIndex] = useContext(GallaryIndex);
    useEffect(() => {
        setOpen(gallaryOpen)
    }, [gallaryOpen]);
    useEffect(() => {
        if (open === false) {
            setGallaryOpen(false)
        }
    }, [open]);


    return (
        <>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={gallaryIndex}
                slides={[
                    ...gallaryContext
                ]}
            />
        </>
    );
};

export default App;
