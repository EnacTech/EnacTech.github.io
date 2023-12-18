import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Contact from '../assets/contact.svg';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';

const ContactUsScreen = () => {
  return (
    <>
      <div className='contact'>
        <motion.div
          className='contact-info'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>Get in touch...</h1>
          <p>
            If you are interested in collaborating with us or have any queries,
            feedback or suggestions regarding our projects, feel free to reach
            out to us. We'd love to hear from you!
          </p>
          <img src={Contact} alt='contact' />
          <div className='contact-details'>
            <div className='contact-details-item'>
              <CiLocationOn className='contact-icon' />
              <p>
                <span>Location: </span> <br />
                <Link to='https://www.google.com/maps/dir//Netaji+Subhas+University+of+Technology+Azad+Hind+Fauj+Marg+Dwarka+Sector-3,+Dwarka+Delhi,+110078/@28.6100216,77.0379647,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390d05dd375e5a13:0x108adaa3abe4bd07'>
                  Directions
                </Link>
              </p>
            </div>
            <div className='contact-details-item'>
              <FaPhone className='contact-icon' />
              <p>
                <span>Contact Number: </span>
                <br />
                <Link to='tel:+919999999999'>+91 99999 99999</Link>
              </p>
            </div>
            <div className='contact-details-item'>
              <CiMail className='contact-icon' />
              <p>
                <span>Email Address: </span>
                <Link to='mailto:johndoe@email.com'>johndoe@email.com</Link>
              </p>
            </div>
          </div>
        </motion.div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUsScreen;
