import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FromatPrice";
import styles from "./Items.module.css";
const Items = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`} className={styles.navlink}>
      <div className={styles.card}>
        <figure className={styles.figure}>
          <img src={image} alt={name} className={styles.img} />
          <figcaption className={styles.caption}>{category}</figcaption>
        </figure>

        <div className={styles.cardData}>
          <div className={styles.cardDataflex}>
            <h3>{name}</h3>
            <p className={styles.cardDataPrice}>
              {<FormatPrice price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Items;
