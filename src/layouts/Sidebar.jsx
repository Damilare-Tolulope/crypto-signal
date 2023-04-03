import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <ul className={styles.links}>
        {links.slice(0,4).map(({ icon, label, route }) => (
          <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : styles.nLink )} key={label} to={route}>
            <li className={styles.link}>
              <img src={icon} alt={label} />
              <span>{label}</span>
            </li>
          </NavLink>
        ))}
        <div className="border-b border-white/5 my-2"></div>
        {links.slice(4,6).map(({ icon, label, route }) => (
          <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : styles.nLink )} key={label} to={route}>
            <li className={styles.link}>
              <img src={icon} alt={label} />
              <span>{label}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

const styles = {
    aside: "bg-dark w-1/5 px-5 h-full fixed",
    links: "py-5",
    nLink: "text-white/40 px-5 py-2",
    link: "flex items-center gap-3 font-medium px-5 my-2 transition linear duration-300 hover:text-primary",
    activeLink: "flex items-center py-2 transition linear duration-300 gap-3 font-bold ml-5 border-l-2 border-primary text-primary"
}

export default Sidebar;
