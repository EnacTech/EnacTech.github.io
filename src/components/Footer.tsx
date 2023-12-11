import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={Logo} alt='Enactus NSUT' />
      </div>
      <div className='footer-desc'>
        <h2>
          <span className='init'>En</span>trepreneurial
        </h2>
        <p>
          Having the perspective to see an opportunity and the talent to create
          value from that opportunity.
        </p>
        <h2>
          <span className='init'>Act</span>ion
        </h2>
        <p>
          The willingness to do something and the commitment to see it through
          even when the outcome is not guaranteed.
        </p>
        <h2>
          <span className='init'>Us</span>
        </h2>
        <p>
          A group of people who see themselves connected in some important way;
          individuals that are part of a greater whole.
        </p>
      </div>
      <div className='footer-social'>
        <h2>
          Connect With Us
          <p>
            Join the conversation and connect with us on our social media
            handles.
          </p>
        </h2>
        <span className='social instagram'>
          <Link to='https://www.instagram.com/enactus_nsut'>
            <FaInstagram />
          </Link>
        </span>
        <span className='social linkedin'>
          <Link to='https://www.instagram.com/enactus_nsut'>
            <FaLinkedin />
          </Link>
        </span>
        <span className='social yt'>
          <Link to='https://www.instagram.com/enactus_nsut'>
            <FaYoutube />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
