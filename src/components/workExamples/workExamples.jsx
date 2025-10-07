import { useSelector } from "react-redux";
import turnOnImg from "./img/switch.png";
import WebFont from 'webfontloader';
import { useContext, useEffect, useRef, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Box, IconButton } from "@mui/material";
import { VkButton } from "../buttons";
import { GallaryContext, ModalContext, Context } from "../context";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import styles from "./workExamples.module.css";

// Компонент заглушки при отсутствии постов
function EmptyState() {
    return (
        <div className={styles.emptyStateContainer}>
            <div className={styles.emptyStateContent}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V6M12 18V20M6 12H4M20 12H18M17.6568 17.6568L16.2426 16.2426M7.75732 7.75732L6.34314 6.34314M17.6568 6.34314L16.2426 7.75732M7.75732 16.2426L6.34314 17.6568M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#00ABE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className={styles.emptyStateTitle}>Скоро здесь появится что-то интересное</h3>
                <p className={styles.emptyStateText}>Мы готовим для вас новые проекты. Оставайтесь на связи!</p>
            </div>
        </div>
    );
}

// Компонент кастомной навигации
const CustomNavigation = ({ onPrev, onNext, disabled }) => {
    return (
        <div className={styles.navigationWrapper}>
            <IconButton
                onClick={onPrev}
                className={styles.navButton}
                aria-label="Previous"
                disabled={disabled?.prev}
            >
                <ChevronLeft fontSize="large" />
            </IconButton>
            <IconButton
                onClick={onNext}
                className={styles.navButton}
                aria-label="Next"
                disabled={disabled?.next}
            >
                <ChevronRight fontSize="large" />
            </IconButton>
        </div>
    );
};

// Компонент списка карточек (десктоп)
function CardList({ posts, isLoading }) {
    const [modalContext, setModalContext] = useContext(ModalContext);
    const [context, setContext] = useContext(Context);

    if (!isLoading && (!posts.items || posts.items.length === 0)) {
        return null;
    }

    const backgroundClasses = [styles.backgroundContentOne, styles.backgroundContentTwo, styles.backgroundContentThree];

    return posts.items.map((post, index) => (
        <div
            key={post.id || index}
            onClick={() => {
                setContext(true);
                setModalContext(post);
            }}
            className={backgroundClasses[index % 3]}
        >
            <div
                style={{ backgroundImage: `url(${post.imageUrl})` }}
                className={styles.cardImage}
            />
            <div className={styles.cardContent}>
                <p className={styles.cardTitle}>
                    {post.title || "Посмотреть проект"}
                </p>
                <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6069 8.80779L13.6041 8.81157C13.3528 8.58093 13.0228 8.4375 12.6563 8.4375C11.88 8.4375 11.25 9.0675 11.25 9.84377C11.25 10.2544 11.4281 10.62 11.7084 10.8769L11.7056 10.8807L16.2 15L11.7056 19.1203L11.7084 19.1241C11.4281 19.38 11.25 19.7456 11.25 20.1563C11.25 20.9325 11.88 21.5625 12.6562 21.5625C13.0228 21.5625 13.3528 21.4191 13.604 21.1895L13.6068 21.1932L19.2318 16.0369C19.5215 15.7697 19.6875 15.3947 19.6875 15C19.6875 14.6054 19.5215 14.2303 19.2318 13.9632L13.6069 8.80779ZM15 0C6.71627 0 0 6.71627 0 15C0 23.2837 6.71627 30 15 30C23.2837 30 30 23.2837 30 15C30 6.71627 23.2837 0 15 0ZM15 27.1875C8.28 27.1875 2.8125 21.72 2.8125 15C2.8125 8.28 8.28 2.8125 15 2.8125C21.72 2.8125 27.1875 8.28 27.1875 15C27.1875 21.72 21.72 27.1875 15 27.1875Z" fill="white" />
                </svg>
            </div>
        </div>
    ));
}

// Компонент галереи
const Gallery = ({ posts, isLoading }) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!isLoading && (!posts.items || posts.items.length === 0)) {
        return <EmptyState />;
    }

    const handlePrev = () => carouselRef.current?.slidePrev();
    const handleNext = () => carouselRef.current?.slideNext();
    const handleSlideChanged = (e) => setActiveIndex(e.item);

    const items = CardList({ posts, isLoading }).reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!result[chunkIndex]) result[chunkIndex] = [];
        result[chunkIndex].push(item);
        return result;
    }, []).map((chunk, index) => (
        <div key={`chunk-${index}`} className={styles.cardsRow}>
            {chunk}
        </div>
    ));

    return (
        <div className={styles.galleryContainer}>
            <AliceCarousel
                ref={carouselRef}
                mouseTracking
                items={items}
                activeIndex={activeIndex}
                onSlideChanged={handleSlideChanged}
                disableDotsControls
                disableButtonsControls
                renderPrevButton={() => null}
                renderNextButton={() => null}
            />
            <CustomNavigation
                onPrev={handlePrev}
                onNext={handleNext}
                disabled={{
                    prev: activeIndex === 0,
                    next: activeIndex >= items.length - 1
                }}
            />
        </div>
    );
};

// Основной компонент
function WorkExamples() {
    const { posts } = useSelector(state => state.posts);
    const isLoading = posts.status === "loading";

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins']
            }
        });
    }, []);

    return (
        <section id="works" className={styles.container}>
            <div className={styles.header}>
                <img src={turnOnImg} className={styles.toggleImage} alt="" />
                <h3 className={styles.title}>Наши работы</h3>
            </div>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Gallery posts={posts} isLoading={isLoading} />
            </Box>

            <div className={styles.vkButtonContainer}>
                <VkButton />
            </div>
        </section>
    );
}

export default WorkExamples;