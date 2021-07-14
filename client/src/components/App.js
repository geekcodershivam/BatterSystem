import React, { useEffect, useState } from 'react';
import { BrowserRouter,Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SideMenu, { menuItems } from './SideMenu';
import { fetchUser,fetchAlerts } from '../actions/index';
import history from '../history';
import '../Assets/css/app.css';
function App(props) {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    props.fetchUser();
    props.fetchAlerts()
  },[]);
  const ren = (name) => {
    if (name === 'Dashboard') {
      return Dashboard;
    } else return name;
  };
  return (
    <BrowserRouter>
   
    <div className="App">
    
      <Router history={history}> 
     
      
      <Route exact path="/" component={Landing} />
        <SideMenu
        
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
          
        /> 
       
        <div className={`container ${inactive ? 'inactive' : ''}`}>
          {menuItems.map((menu, index) => (
            <>
              <Route
                key={menu.name}
                exact={menu.exact}
                path={menu.to}
                component={ren(menu.name)}
              />

              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route
                      key={subMenu.name}
                      path={subMenu.to}
                      component={subMenu.name}
                    />
                  ))
                : null}
            </>
          ))}
        </div>
         
      </Router>
     
    </div>
    </BrowserRouter>
  );
}
export default connect(null, { fetchUser,fetchAlerts })(App);
