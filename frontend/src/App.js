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
import StudentList from "./Pages/StudentList/StudentList";
import UpdateVacancy from "./Pages/UpdateVacancy/UpdateVacancy";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/studentist" exact>
          <StudentList></StudentList>
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
        <Route path="/vacancy/show" exact>
          <CheckVacancy></CheckVacancy>
        </Route>
        <Route path="/vacancy/update" exact>
          <UpdateVacancy></UpdateVacancy>
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
