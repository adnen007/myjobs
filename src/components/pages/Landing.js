import Logo from "../Logo";
import { Link } from "react-router-dom";
import S from "../../css/Landing.module.css";
import landingImage from "../../images/undraw_online_test_re_kyfx.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <Logo />
        <div className={S.main}>
          <div className={S.content}>
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <div className={S.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nulla dolores nemo labore fugit animi, fuga, qui voluptates minus illo omnis eaque enim dicta! Voluptatibus quos neque
              exercitationem omnis architecto.
            </div>
            <Link to="/register">Login/Register</Link>
          </div>
          <div className={S.image}>
            <img src={landingImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
