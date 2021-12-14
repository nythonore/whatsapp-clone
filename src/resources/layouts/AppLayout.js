import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout d-flex">
      <div className="col-12 col-md-4 px-0 sidebar">
        <SideBar />
      </div>

      <div className="col-12 col-md-8 px-0">
        <NavBar />

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
};

export default AppLayout;
