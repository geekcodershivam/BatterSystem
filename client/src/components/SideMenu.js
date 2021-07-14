import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';


import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "bi bi-grid",
  },
  {
    name: "E3-Apps",
    exact: true,
    to: `/e3`,
    iconClassName: "bi bi-key",
    subMenus: [
      { name: "Peak Shaving & Alerts", to: "/e3/peak",iconClassName: "bi bi-bell"},
      { name: "Ventilation", to: "/e3/ventilation" ,iconClassName: "bi bi-snow3" },
      { name: "Cooling", to: "/e3/cooling",iconClassName: "bi bi-safe2" },
      { name: "Out Of Hours ", to: "/e3/ooh",iconClassName: "bi bi-brightness-high" },
      { name: "Ev Charging", to: "/e3/evcharging",iconClassName: "bi bi-lightning-charge" },
      { name: "Load Shifting", to: "/e3/looadshifting", iconClassName: "fas fa-gas-pump"},
    ],
  },
  { name: "Demand Response", to: `/Demand`, iconClassName: "bi bi-file-bar-graph" },
  {
    name: "Insights",
    exact: true,
    to: `/insights`,
    iconClassName: "bi bi-speedometer2",
    
  },
  { name: "Version History", to: `/versionhistory`, iconClassName: "bi bi-clock-history" }
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const [isauth, setAuth] = useState(true);
  
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);

    
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  const st=(isauth===true)?{display:'block'}:{display:'none'};
  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {

    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div style={st} className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
        <h5 style={{fontSize: '19px'}}>Grid Manager 2.0</h5>
        </div>


        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <div className="divider"></div>


      <div className="side-menu-footer">
        <div className="avatar">
          <img src="https://lh3.googleusercontent.com/a-/AOh14GijEW0risVUivRVwZUqnbQRkFUrM9i8FwoZMN-g9Q=s96-c" alt="user" />
        </div>
        <div className="user-info">
          <h5>Hey, Rizwan Khan</h5>
          <p>User Id:  </p>
        </div>
      </div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

        </ul>
      </div>
      <div className="log-item">
        <div className="log-icon">
         <i className="bi bi-power"></i>
        </div>
        <span style={{marginLeft:'15px'}}> Logout </span> 
        </div>
    </div>
  );
};
function mapStateToProps(state){
  return {auth:state.auth}
}
export default connect(mapStateToProps, null)(SideMenu);

