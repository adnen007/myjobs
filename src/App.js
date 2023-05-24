import { Route, Routes } from "react-router-dom";
import AllJobs from "./components/pages/AllJobs";
import Stats from "./components/pages/Stats";
import AddJobs from "./components/pages/AddJobs";
import Profile from "./components/pages/Profile";
import Header from "./components/Header";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-jobs" element={<AddJobs />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
//if the Route has a element he will return the complenet in element and will return its children in
//the outlet
//if the router don't has element he will return the children who macth the path

export default App;
