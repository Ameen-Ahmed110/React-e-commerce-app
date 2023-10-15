import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.logoSection}>
          <NavLink to={"/"} className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </NavLink>
          <div className={styles.logoName}>
            <h2>LEGO LAND</h2>
            <p>RED BRICK</p>
          </div>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <NavLink to={"/"} className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className={styles.navLink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className={styles.navLink}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"} className={styles.navLink}>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.navright}>
          <div>
            <NavLink className={styles.btn}>Login</NavLink>
          </div>
          <div className={styles.cart}>
            <NavLink to={"/cart"} className={`${styles.navLink} ${styles.carttrolley}`}>
              <BsCart3 className={styles.carts} />
              <span className={styles.cartItem}>0</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
