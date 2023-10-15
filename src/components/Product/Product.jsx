import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productSection}>
        <div className={styles.productImg}>
          <img src="/images/product/product1.png" alt="" />
          <p>Nintendo</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product2.jpg" alt="" />
          <p>Oculus</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product3.png" alt="" />
          <p>XBOx</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product4.png" alt="" />
          <p>Laptop</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product5.png" alt="" />
          <p>Controllers</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product6.jpg" alt="" />
          <p>Playstation</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product7.png" alt="" />
          <p>Video Game</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product8.jpg" alt="" />
          <p>Headsets</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product9.jpg" alt="" />
          <p>Keyboards</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product10.jpg" alt="" />
          <p>Chairs</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product11.jpg" alt="" />
          <p>Gaming mice</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product12.jpg" alt="" />
          <p>Apparel</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product13.jpg" alt="" />
          <p>Action Figures</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product14.jpg" alt="" />
          <p>Hats</p>
        </div>
        <div className={styles.productImg}>
          <img src="/images/product/product15.jpg" alt="" />
          <p>Mugs</p>
        </div>
      </div>
    </div>
  );
};

export default Product;