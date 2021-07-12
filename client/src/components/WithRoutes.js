import React,{useState} from 'react'
import SideMenu, { menuItems } from './SideMenu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
export default function WithRoutes() {
  const [inactive, setInactive] = useState(false);
  const ren=(name)=>{
    if(name==="Dashboard"){
      return Dashboard;
    }
  }
  return (
    <>
    
    <div className={`container ${inactive ? 'inactive' : ''}`}>
      
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to} component={ren(menu.name)}/>

              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to} component={subMenu.name} />
                  ))
                : null}
            </>
          ))}
        </div>
        </>
  )
}
