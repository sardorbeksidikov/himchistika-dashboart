import { BrowserRouter } from "react-router-dom";
// import Login from "./components/Login";
import Router from "./router/Router";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Login /> */}

      <Router />
    </BrowserRouter>
  );
};

export default App;
