import { toast } from "react-toastify";

const ContactForm = () => {
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };
  return (
    <>
      <div className='contact-form'>
        <form action='' method='post'>
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
          <button type='submit' className='form-btn' onClick={submitHandler}>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
