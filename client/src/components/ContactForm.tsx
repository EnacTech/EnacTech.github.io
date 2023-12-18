import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const FORM_ENDPOINT = `http://localhost:1337/api/messages`;

const ContactForm = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    const formData = new FormData(e.currentTarget);
    const data = {
      data: {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      },
    };
    axios
      .post(FORM_ENDPOINT, data)
      .then((res) => {
        console.log(res);
        toast.success('Message sent successfully!');
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          'There was an error sending your message. Please try again.',
        );
      });
    formData.set('name', '');
    formData.set('email', '');
    formData.set('subject', '');
    formData.set('message', '');
  };

  return (
    <>
      <motion.div
        className='contact-form'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <form action={FORM_ENDPOINT} method='post' onSubmit={submitHandler}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              id=''
              className='form-control'
              placeholder='Your name'
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              id=''
              className='form-control'
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='subject'
              id=''
              className='form-control'
              placeholder='Subject'
            />
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              id=''
              cols={30}
              rows={10}
              className='form-control textarea'
              placeholder='Enter you message here...'
            ></textarea>
          </div>
          <button type='submit' className='form-btn'>
            Send Message
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;
