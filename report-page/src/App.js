import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Fabric className="App">
      <div className="header">
        <NavBar/>
      </div>
      <div className="body">
        <div className="SidebarMenu">
          <SideBar/>
        </div>
        <div className="content">
          <Content/>
        </div>        
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </Fabric>
  );
}

export default App;
