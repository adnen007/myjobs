import { Link } from "react-router-dom";
import Logo from "./Logo";
import { GoGraph } from "react-icons/go";
import { VscGraphLine } from "react-icons/vsc";
import { FaRegListAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GrFormClose } from "react-icons/gr";
import S from "../css/menu.module.css";
import { useContext } from "react";
import { context } from "../contexts/menuContext";

const Menu = () => {
  const { state, dispatch } = useContext(context);

  const items = [
    { path: "/", content: "Stats", icon: <GoGraph /> },
    { path: "/all-jobs", content: "All jobs", icon: <VscGraphLine /> },
    { path: "/add-jobs", content: "Add job", icon: <FaRegListAlt /> },
    { path: "/profile", content: "Profile", icon: <ImProfile /> },
  ];

  const sections = ["/", "/all-jobs", "/add-jobs", "/profile"];

  return (
    <div className={`menu ${state.menu ? "on" : "off"}`}>
      <div className={S.content}>
        <div className={S.close}>
          <GrFormClose
            onClick={() => {
              dispatch({ type: "MENU_OFF" });
            }}
          />
        </div>
        <div className={S.logo}>
          <Logo />
        </div>

        <ul>
          {items.map((item, i) => {
            return (
              <li
                key={i}
                className={sections.indexOf(window.location.pathname) === i ? S.active : ""}
                onClick={() => {
                  dispatch({ type: "CHANGE_ACTIVE_SECTION" });
                }}
              >
                <Link to={item.path}>
                  {item.icon}
                  {item.content}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// STATE LOGIC : here add so when you click on the close state get a class to turn the display
//to none

export default Menu;
