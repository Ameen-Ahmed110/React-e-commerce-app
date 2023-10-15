import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

const Service = () => {
  return (
    <Wrapper>
      <div className="service">
        <div className="grid grid-three-column">
          <div className="service1">
            <div>
              <TbTruckDelivery className="icon icon1" />
              <p>super Fast and Free Delivery</p>
            </div>
          </div>
          <div className="service2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon " />
                <p>Non-contact shipping</p>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <p>Money-back Guaranteed</p>
              </div>
            </div>
          </div>
          <div className="service3">
            <div>
              <RiSecurePaymentLine className="icon icon3" />
              <p>super Fast and Free Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  .service {
    max-width: 1300px;
    margin: 0 auto;
  }
  .grid {
    margin-left: 238px;
    gap: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .service1,
  .service2,
  .service3 {
    padding: 20px;
    width: auto;
    height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border-radius: 2rem;
    background: #f9fafc;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    text-align: center;
  }
  .service2 {
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    gap: 2.8rem;
    .services-colum-2 {
      background: #f9fafc;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      div {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  p {
    margin-top: 1.4rem;
    font-size: 0.8rem;
  }
  .icon {
    width: 6rem;
    height: 6rem;
    padding: 1.4rem;
    border-radius: 50%;
    background-color: #fff;
    color: #ed7064;
  }
`;

export default Service;
