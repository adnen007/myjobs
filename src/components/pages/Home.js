import Menu from "../Menu";
import Header from "../Header";
import { Outlet } from "react-router";

const Home = ({}) => {
  return (
    <>
      <Menu />
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
