import { Image } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="d-flex bg-ct-grey navbar justify-content-between align-items-center py-3 px-4">
      <div className="d-flex align-items-center cursor">
        <Image src="https://nythonore.me/nythonore.jpg" alt="Honore Niyitegeka" className="img-fluid mr-3 profile" />
        <p className="user">Honore Niyitegeka</p>
      </div>

      <div className="d-flex icons">
        <p><i className="fas fa-search"></i></p>
        <p className="ml-4"><i className="fas fa-ellipsis-v"></i></p>
      </div>
    </div>
  );
};

export default NavBar;
