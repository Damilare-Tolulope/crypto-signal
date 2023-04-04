import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";

import night from '../assets/icons/night.svg'

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <ul className={styles.links}>
        {links.slice(0,4).map(({ icon, label, route }) => (
          <li key={label}>
            <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : styles.link )} to={route}>
                <img src={icon} alt={label} />
                <span>{label}</span>
            </NavLink>
          </li>
        ))}
        <div className="border-b border-white/5 my-5"></div>
        {links.slice(4,6).map(({ icon, label, route }, index) => {
          if(index === 1){
            return (
              <li key={label}>
                <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : `${styles.link} !text-primary` )} to={route}>
                    <img src={icon} alt={label} />
                    <span>{label}</span>
                </NavLink>
              </li>
            )
          }else {
            return (
              <li key={label}>
                <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : styles.link )} key={label} to={route}>
                    <img src={icon} alt={label} />
                    <span>{label}</span>
                </NavLink>
              </li>
            )
          }
          })}
        <div className="border-b border-white/5 my-5"></div>
          <li className={styles.link}>
            <img src={night} alt="night" />
            <span>Dark Mode</span>
          </li>
      </ul>
    </aside>
  );
};

const styles = {
    aside: "bg-dark 2xl:w-1/12 w-1/5 px-5 h-full fixed",
    links: "py-5",
    link: "flex my-1 cursor-pointer items-center gap-3 text-white/40 font-medium py-3 px-5 transition linear duration-300 hover:text-primary",
    activeLink: "flex items-center py-3 px-5 transition linear duration-300 gap-3 font-bold ml-5 border-l-2 border-primary text-primary"
}

export default Sidebar;
