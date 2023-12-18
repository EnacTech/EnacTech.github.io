import { motion } from 'framer-motion';
import enacPop from '../assets/enac-pop.gif';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
  const images = [
    'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <>
      <motion.div
        className='hero'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className='logo-holder'>
          <img src={enacPop} className='hero-logo' />
          <div className='enac-name'>
            enactus
            <span className='clg-name'>NSUT</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='gallery'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1>Archives</h1>
        <Carousel images={images} />
      </motion.div>
    </>
  );
};

export default HomeScreen;
