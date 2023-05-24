import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import S from "../css/Header.module.css";
import Logo from "./Logo";
import { context } from "../contexts/menuContext";
import { useContext, useState } from "react";

const Header = () => {
  const { dispatch } = useContext(context);

  const [account, setAcount] = useState(false);

  return (
    <div className={S.header}>
      <div className="container">
        <div className={S.menu_icon}>
          <HiOutlineMenuAlt3
            onClick={() => {
              dispatch({ type: "MENU_TOGGLE" });
            }}
          />
        </div>
        <h1>Dashboard</h1>
        <Logo />
        <div onClick={() => setAcount(!account)} className={S.account}>
          <RiAccountCircleFill />
          <div className={S.name}>name</div>
          <IoMdArrowDropdown />
          <div className={`${S.logout} ${account ? S.active : ""}`}>Logout</div>
        </div>
      </div>
    </div>
  );
};
// STATE LOGIC : here add a state that when you clik on menu icon the menu have a class to turn
//displan none to display block
// ALSO ADD THE LOGIC OF THE EFFECT OF THE ACCOUNT IN THE LOGOUT
export default Header;
