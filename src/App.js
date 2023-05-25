import { Route, Routes } from "react-router-dom";
import AllJobs from "./components/pages/AllJobs";
import Stats from "./components/pages/Stats";
import AddJobs from "./components/pages/AddJobs";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Landing from "./components/pages/Landing";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
//if the Route has a element he will return the complenet in element and will return its children in
//the outlet
//if the router don't has element he will return the children who macth the path

export default App;
