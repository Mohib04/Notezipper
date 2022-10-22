import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import Registration from "./screens/Registration/Registration";
import Login from "./screens/Login/Login";
import MyNotes from "./screens/MyNotes/MyNotes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
