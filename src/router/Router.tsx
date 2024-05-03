import { Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import Register from "../components/Register";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
    </div>
  );
};

export default Router;
