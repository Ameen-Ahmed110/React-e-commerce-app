import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle.js";
import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    return (
        <Wrapper>
            <div className="colors">
                <p>
                    Color:
                    {colors.map((curColor, index) => {
                        return (
                            <button
                                key={index}
                                style={{ backgroundColor: curColor }}
                                className={color === curColor ? "btnStyle active" : "btnStyle"}
                                onClick={() => setColor(curColor)}
                            >
                                {color === curColor ? <FaCheck className="checkStyle" /> : null}
                            </button>
                        );
                    })}
                </p>
            </div>

            {/* add to cart  */}
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            <NavLink to="/cart" className="btn">
                {/* <Button className="btn">Add To Cart</Button> */}
                Add To Cart
            </NavLink>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    margin-top: 3px;
    font-size: 0.7rem;
    color: #fff;
  }

  .btn {
    padding: 15px 0;
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #ed7064;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
  }
  .btn:hover {
    background-color: rgb(98 84 243);
  }

  .btn :hover {
    color: #fff;
  }
  .btn a {
    color: rgb(98 84 243);
    font-size: 1.4rem;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      align-items: center;
      font-size: 1.5rem;
      color: #ed7064;
      font-weight: 700;
    }
  }
`;
export default AddToCart;
