import React from "react";
import Button from "../button/Button";
import Textbox from "../textbox/Textbox";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <form method="post" className="login__form">
        <label htmlFor="" className="login__form__title">
          đăng nhập
        </label>
        <div className="login__form__item login__form__username">
          <Textbox placehoder="Tài khoản" animate={true} />
        </div>
        <div className="login__form__item login__form__password">
          <Textbox placehoder="Mật khẩu" animate={true} />
        </div>
        <Button color="orange">Đăng nhập</Button>
      </form>
    </div>
  );
};

export default Login;
