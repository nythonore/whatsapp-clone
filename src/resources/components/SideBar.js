import { Image, InputGroup, FormControl } from 'react-bootstrap';
import Contact from './Contact';

const SideBar = () => {
  return (
    <>
      <div className="d-flex bg-ct-grey topbar justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center">
          <Image src="https://nythonore.me/nythonore.jpg" alt="Honore Niyitegeka" className="img-fluid mr-4 profile" />
          <p className="beta">BETA</p>
        </div>

        <div className="d-flex icons">
          <p><i className="fas fa-circle-notch"></i></p>
          <p className="mx-4"><i className="fas fa-comment-alt"></i></p>
          <p><i className="fas fa-ellipsis-v"></i></p>
        </div>
      </div>

      <div className="search-bar px-3 py-2">
        <InputGroup>
          <InputGroup.Text className="pl-4">
            <i className="fas fa-search"></i>
          </InputGroup.Text>

          <FormControl placeholder="Search or start new chat" />
        </InputGroup>
      </div>

      <div className="contacts-list sidebar-contact">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, key) => (
            <div key={key}>
              <Contact />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default SideBar;
