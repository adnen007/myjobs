import Menu from "../Menu";
import Header from "../Header";
import { Outlet } from "react-router";

const Home = ({}) => {
  return (
    <>
      <Menu />
      <div className="content">
        <Header />
        <section>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default Home;
