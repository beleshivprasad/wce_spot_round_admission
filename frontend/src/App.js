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
import Admin from "./Pages/Admin/Login/Admin";
import StudentList from "./Pages/Admin/StudentList/StudentList";
import UpdateVacancy from "./Pages/Admin/UpdateVacancy/UpdateVacancy";
import MeritList from "./Pages/MeritList/MeritList";
import DisplayMerit from "./Pages/Admin/DisplayMerit/DisplayMerit";
import ManageAllotment from "./Pages/Admin/Allotment/ManageAllotment";
import AddAdmin from "./Pages/Admin/addAdmin/AddAdmin";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/studentlist" exact>
          <StudentList></StudentList>
        </Route>
        <Route path="/allotment" exact>
          <ManageAllotment></ManageAllotment>
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
        <Route path="/admin/add" exact>
          <AddAdmin></AddAdmin>
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
        <Route path="/merit">
          <MeritList></MeritList>
        </Route>
        <Route path="/instructions" exact>
          <Instructions></Instructions>
        </Route>
        <Route path="/displaymerit" exact>
          <DisplayMerit></DisplayMerit>
        </Route>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
