import { Link } from "react-router-dom";
import "./Login.scss";

const LoginImg = "./assets/logiinImg.png";
const Login = () => {
  return (
    <div>
      <section className="img">
        <img src={LoginImg} alt="this is a login image of login page" />
      </section>
      <section>
        <div className="container">
          <form >
            <div className="head">
              <h1>Tizimga kirish </h1>
            </div>
            <div className="formBody">
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder=""/>
              </div>
              <div className="form_group">
                <label htmlFor="password">Parol</label>
                <input type="password" id="password" name="password" placeholder=""/>
              </div>
              <div className="btn">
                <button>Tizimga kirish</button>
              </div>
              <div className="register">
                <span>Hisobingiz yo'qmi ?</span>
                <Link to={'/register'}>
                  Registerga o'tish
                </Link>
              </div>
            </div>
          </form>
                    
        </div>
      </section>
    </div>
  );
};

export default Login;
