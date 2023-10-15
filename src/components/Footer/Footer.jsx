import styles from "./Footer.module.css";
import { BsDiscord } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div>
          <h3>Lego Land</h3>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className={styles.icon}>
            <div className={styles.iconbg}>
              <BsDiscord />
            </div>
            <div className={styles.iconbg}>
              <LuInstagram />
            </div>
            <div className={styles.iconbg}>
              <BsYoutube />
            </div>
          </div>
        </div>
        <div>
          <h3>Call Us</h3>
          <p>+92 317-1234567</p>
        </div>
      </div>
      <div className={styles.footerBottomSection}>
        <div className={styles.mainFooterSection}>
          <div><h3>@2023 Leog Land, All Right Reserved</h3></div>
          <div><h3>PRIVACY POLICY TERMS & CONDITION</h3></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
