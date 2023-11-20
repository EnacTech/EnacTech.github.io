import { useEffect, useState } from "react";

const ComingSoon = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  })

  return (
    <div className='coming-soon'>
      <div>
        <h1 className='typed'>Coming Soon...</h1>
      </div>
      <h2 className={show?'':'hide'}>
        Visit our instagram: &nbsp;
        <a href='https://instagram.com/enactus_nsut' target='_blank'>
          @enactus_nsut
        </a>
      </h2>
    </div>
  );
};

export default ComingSoon;
