import React from "react";
import Button from "../button/Button";
import Textbox from "../textbox/Textbox";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <form action="" className="register-form">
        <label htmlFor="" className="register-form__title">
          đăng ký
        </label>
        <div className="register-form__item">
          <Textbox placehoder="tài khoản" animate={true} />
        </div>
        <div className="register-form__item">
          <Textbox placehoder="mật khẩu" animate={true} />
        </div>
        <div className="register-form__item">
          <Textbox placehoder="Xác nhận" animate={true} />
        </div>

        <Button color="orange">Đăng ký</Button>
      </form>
    </div>
  );
};

export default Register;
