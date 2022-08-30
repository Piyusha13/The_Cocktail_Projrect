import './App.css';
import HomePage from "./components/HomePage";
import { ToastContainer, toast } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div>
      <HomePage/>
      <ToastContainer autoClose={3000}  />

    </div>
  );
}

export default App;
