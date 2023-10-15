import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Service from "../Servicess/Service";
import FeatureProduct from "../Feature/FeatureProduct";
const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.mainHome}>
          <div className={styles.homeContent}>
            <span>Wellcome To </span>
            <h1>LEGO STORE</h1>
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
      <FeatureProduct />
      <Service />
    </>
  );
};

export default Home;
