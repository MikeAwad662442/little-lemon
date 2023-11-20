import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css';

// === Pages === //
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Menu from "./components/Pages/Menu";
import OrderOnline from "./components/Pages/OrderOnline";
import Booking  from "./components/Pages/BookingPage";
// import Footer from "./components/MasterPages/Footer";
import LogIn from "./components/Pages/LogIn";
// === Router Pages === //
import AppRouting from "./AppRouting";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRouting />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="OrderOnline" element={<OrderOnline />} />
      <Route path="BookingPage" element={<Booking />} />
      <Route path="LogIn" element={<LogIn  />} />
    </Route>
  )

)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
