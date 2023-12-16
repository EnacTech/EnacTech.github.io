import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: '#faae32fe',
    },
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState('left');

  const handleNext = () => {
    setDirection('right');
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentImage ? 'right' : 'left');
    setCurrentImage(index);
  };

  return (
    <div className='carousel'>
      <div className='carousel-images'>
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            variants={slideVariants}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate='visible'
            exit='exit'
          />
        </AnimatePresence>
        <div className='slide_direction'>
          <motion.div
            className='left'
            onClick={handlePrev}
            variants={slidersVariants}
            whileHover='hover'
          >
            <FaArrowCircleLeft />
          </motion.div>
          <motion.div
            className='right'
            onClick={handleNext}
            variants={slidersVariants}
            whileHover='hover'
          >
            <FaArrowCircleRight />
          </motion.div>
        </div>
      </div>
      <center>
        <div className='carousel-indicator'>
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${
                index === currentImage ? 'active__carousel' : ''
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default Carousel;
