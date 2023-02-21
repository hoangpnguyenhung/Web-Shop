import React from "react";
import { Link } from "react-router-dom";
import Grid from "../grid/Grid";
import logo from "../../assets/images/logo_main.png";
import { footerAboutLinks } from "../../constants";

import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiFillFacebook } from "react-icons/ai";
import "./footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <Grid col={3} md={2} sm={1} gap="20px">
          <div className="footer__about">
            <div className="footer__about__logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer__about__sologan">
              <span>Uy tín là mục tiêu hàng đầu</span>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__item__title">
              <span>Về chúng tôi</span>
            </div>
            <div className="footer__item__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index} className="footer__item__content__item">
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__item__title">
              <span>Liên hệ</span>
            </div>
            <div className="footer__item__content">
              <div className="footer__item__content__item">
                <GoLocation />
                <span>
                  Số 999, đường Lê Độ, phường Chính Gián, Thanh Khê, Đà Nẵng
                </span>
              </div>
              <div className="footer__item__content__item">
                <AiOutlinePhone />
                <span>0999999999</span>
              </div>
              <div className="footer__item__content__item">
                <AiFillFacebook />
                <span>
                  https://www.facebook.com/profile.php?id=100009800567956
                </span>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
