import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import NewRegister from "./Pages/Registration/NewRegister";
import CheckStatus from "./Pages/Registration/CheckStatus";
import CheckVacancy from "./Pages/CheckVacancy/CheckVacancy";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Instructions from "./Pages/Instructions/Instructions";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/admin" exact>
          <Admin></Admin>
        </Route>
        <Route path="/register" exact>
          <NewRegister></NewRegister>
        </Route>
        <Route path="/status" exact>
          <CheckStatus></CheckStatus>
        </Route>
        <Route path="/vacancy" exact>
          <CheckVacancy></CheckVacancy>
        </Route>
        <Route path="/contact" exact>
          <ContactUs></ContactUs>
        </Route>
        <Route path="/instructions" exact>
          <Instructions></Instructions>
        </Route>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
