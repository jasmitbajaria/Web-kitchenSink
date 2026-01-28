import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import LeftMenu from "../../components/LeftMenu";

const Content = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className="d-flex">
      <div className="">
        <LeftMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div 
        className="app-container"
        style={{
          marginLeft: sidebarOpen ? '280px' : '80px',
          transition: 'margin-left 0.3s ease-in-out',
          flexGrow: 1,
        }}
      >
        <Header />
        <div className="main-wrapper">
          <Outlet />  {/* Child routes render here */}
        </div>
      </div>
    </div>
  )
}

export default Content