// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Container/Navbar";
import About from "./Container/About.jsx";
import Skils from "./Container/Skils.jsx";
import Projects from "./Container/Projects.jsx";
import Skillbar from "./Container/Skillbar.jsx";
import Contect from "./Container/Contect.jsx";
// import UserRoutes from './UserRoutes.jsx';
// import { Route, Routes } from 'react-router-dom';
import UserRoutes from "./UserRoutes";

function App() {
  return (
    <div className="App">
      {/* <UserRoutes /> */}
      <Navbar />
      <About />
      <Skils />
      <Projects />
      <Skillbar />
      <Contect />
    </div>
  );
}

export default App;
