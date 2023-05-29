import notFound from "../../images/undraw_page_not_found_re_e9o6.svg";
import { Link } from "react-router-dom";
import S from "../../css/NotFound.module.css";
const NotFound = () => {
  return (
    <div className={S.not_found}>
      <img src={notFound} alt="" />
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
