import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SideMenu, { menuItems } from './SideMenu';
import { fetchUser } from '../actions/index';
import { fetchAlerts } from '../actions/alertAction';
import history from '../history';
import '../Assets/css/app.css';
function App(props) {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    props.fetchUser();
  }, []);

  useEffect(() => {
    switch (props.auth) {
      case null:
        return;
      case false:
        history.push('/');
        return;
      default:
        history.push('/');
        return;
    }
  }, []);

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
                        exact
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
function mapStateToProps(state) {
  return { state: state.auth };
}
export default connect(mapStateToProps, { fetchUser, fetchAlerts })(App);
