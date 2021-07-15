import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, to, clicked } = props;
  const todisplay = clicked ? { display: 'none' } : { display: 'initial' };
  return (
    <li onClick={props.onClick}>
      <Link
        exact
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={`menu-item`}
      >
        <div className="menu-icon">
          <i className={iconClassName}></i>
        </div>
        <span>{name} </span>
        <i style={todisplay} className="bi bi-caret-down-fill arrow"></i>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>
                {' '}
                <i
                  style={{ marginRight: '20px' }}
                  className={menu.iconClassName}
                ></i>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
