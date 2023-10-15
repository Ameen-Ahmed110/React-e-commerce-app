import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sdieContent}>
        <ul>
          <li>
            <NavLink to={"/dashboard"} className={styles.navLink}>
              Dashoboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className={styles.navLink}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
