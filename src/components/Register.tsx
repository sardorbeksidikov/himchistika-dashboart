import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import './Register.scss'

const Register = () => {
  return (



    
    <div>
      <div className="container">
        <div className="reg_content">
          <div className="back">
            <Link to={"/login"}>
              <IoIosArrowBack color="#000"  size={32}/>

              <span>Ortga</span>
            </Link>
          </div>
          <div className="register">
            <div className="reg_head">
              <h1>Royhatdan o'tish</h1>
            </div>
            <div className="reg_form">
              <div className="reg_group">
                <label htmlFor="name">Ismingiz</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="reg_group">
                <label htmlFor="name">Telefon raqamingiz</label>
                <input type="tel" id="tel" name="tel" />
              </div>
              <div className="reg_group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="reg_group">
                <label htmlFor="password">Parol</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="reg_group">
                <label htmlFor="password">Parolni tasqidlash</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="btn">
                <button>Ro'yhatdan o'tish</button>
              </div>
              <div className="tizim">
                <span>Ro'yhatdan o'tganmisiz ?</span>
                <a href="#">Tizimga kirish</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
