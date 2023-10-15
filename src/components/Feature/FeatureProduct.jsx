import styles from "./FeatureProduct.module.css";
import { useProductContext } from "../../context/productcontext";
import Items from "../Items/Items";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div>
        <h1>...Loading</h1>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.mianContainer}>
        <p>Check Now</p>
        <h2>Our Feature Services</h2>
        <div className={styles.FeatureProduct}>
          {featureProducts.map((curElem) => {
            return <Items key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
