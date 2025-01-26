import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./FrontWebsite/Views/Home/Home.jsx";
import SignIn from "./FrontWebsite/Views/Auth/SignIn.jsx";
import SignUp from "./FrontWebsite/Views/Auth/SignUp.jsx";
import About from "./FrontWebsite/Views/About/About.jsx";
import OurBusinesses from "./FrontWebsite/Views/OurBusinesses/OurBusinesses.jsx";
import NewsRoom from "./FrontWebsite/Views/NewsRoom/NewsRoom.jsx";
import ContactUs from "./FrontWebsite/Views/ContactUs/ContactUs.jsx";
import HostelDetails from "./FrontWebsite/Views/AllAppointmentDetails/HostelDetails.jsx";
import FoodCateringDetails from "./FrontWebsite/Views/AllAppointmentDetails/FoodCateringDetails.jsx";
import HospitalDetails from "./FrontWebsite/Views/AllAppointmentDetails/HospitalDetails.jsx";
import FashionDesignDetails from "./FrontWebsite/Views/AllAppointmentDetails/FashionDesignDetails.jsx";
import GarageDetails from "./FrontWebsite/Views/AllAppointmentDetails/GarageDetails.jsx";
import ProfessionalServicesDetails from "./FrontWebsite/Views/AllAppointmentDetails/ProfessionalServicesDetails.jsx";
import BeautyTattooDetails from "./FrontWebsite/Views/AllAppointmentDetails/BeautyTattooDetails.jsx";
import AdminDashboard from "./AdminDashboard/Views/Dashboards/AdminDashboard.jsx";

var hist = createBrowserHistory();
export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/OurBusinesses" element={<OurBusinesses />} />
        <Route exact path="/NewsRoom" element={<NewsRoom />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/HostelDetails" element={<HostelDetails />} />
        <Route
          exact
          path="/FoodCateringDetails"
          element={<FoodCateringDetails />}
        />
        <Route exact path="/HospitalDetails" element={<HospitalDetails />} />
        <Route
          exact
          path="/FashionDesignDetails"
          element={<FashionDesignDetails />}
        />
        <Route exact path="/GarageDetails" element={<GarageDetails />} />
        <Route
          exact
          path="/ProfessionalServicesDetails"
          element={<ProfessionalServicesDetails />}
        />
        <Route
          exact
          path="/BeautyTattooDetails"
          element={<BeautyTattooDetails />}
        />
        <Route
          exact
          path="/AdminDashboard"
          element={<AdminDashboard />}
        />
      </Routes>
    </Router>
  );
}
