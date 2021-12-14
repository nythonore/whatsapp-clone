import { Image } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact d-flex align-items-center border p-3 cursor">
      <Image src="https://nythonore.me/nythonore.jpg" alt="Honore Niyitegeka" className="img-fluid mr-3" />

      <div className="info">
        <div className="d-flex justify-content-between">
          <p className="user">Honore Niyitegeka</p>
          <p className="color-ct-grey-1">11:49 AM</p>
        </div>

        <p className="message color-ct-grey-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};

export default Contact;
