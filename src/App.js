import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode1, setMode1] = useState("light");
  const [mode2, setMode2] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setTimeout(() => {
      setAlert({
        message: message,
        type: type,
      });
    }, 400);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode1 === "light") {
      setMode1("dark");
      setMode2("light");
      document.body.style.backgroundColor = "#5f626f";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode1("light");
      setMode2("dark");
      document.body.style.backgroundColor = "#dee4e5";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Text Utils"
        mode1={mode1}
        mode2={mode2}
        togglemode={togglemode}
      />
      <Alert Alert={alert} />
      {/* <Router>
      />

        <Routes>
          <Route exact path="/about" element={<About  />} />
          <Route exact path="/"  element={} />
        </Routes>
      </div>
      {/* <About></About> */}
      {/* </Router> */}
      <div className="container my-4">
        <TextForm heading="Enter text in the TextArea" />
      </div>
    </>
  );
}

export default App;
