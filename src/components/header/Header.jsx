import React, { useEffect, useRef } from "react";
import { mainNav } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiSearch, HiUser } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/images/logo_main.png";
import "./header.scss";
import { useSelector } from "react-redux";

const Header = (props) => {
  const cartItems = useSelector((state) => state.cartItem.value);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop >= 80 ||
        document.documentElement.scrollTop >= 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__menu">
          <div className="header__menu__toggle" onClick={menuToggle}>
            <HiMenu />
          </div>
          <div className="header__menu__left" ref={menuRef}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <IoIosClose />
            </div>
            {mainNav.map((item, index) => (
              <Link to={item.path} key={index}>
                <div
                  className={`header__menu__left__item ${
                    item.path === pathname ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  <span>{item.display}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item">
              <Link>
                <HiSearch />
              </Link>
            </div>
            <div
              className="header__menu__right__item header__menu__right__cart"
              totalorders={cartItems.length}
            >
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </div>
            <div className="header__menu__right__item header__menu__right__user">
              <Link>
                <HiUser />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
