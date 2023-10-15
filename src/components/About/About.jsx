import styles from "./About.module.css";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../../context/productcontext";
const About = () => {

  const {myName} = useProductContext();
  return (
  <>
  {myName}
    <div className={styles.home}>
      <div className={styles.mainHome}>
        <div className={styles.homeContent}>
          <span>Wellcome To </span>
          <h1>LEGO ECOMMERCE</h1>
          <p>
            Discover our new store, where style meets savings! Explore a world
            of fashion, home decor, and more. Shop the latest trends and find
            incredible deals today!
          </p>
          <NavLink to={"/product"}>
            <button>Shop Now</button>
          </NavLink>
        </div>
        <div className={styles.image}>
          <div className={styles.imgBgColr}></div>
          <img src="/images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
