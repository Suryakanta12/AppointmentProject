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
import AdminDashboard from "./Dashboards/Views/AdminDashboards/AdminDashboard.jsx";


import HostelAdmin from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/AdminManagement/HostelAdmin.jsx";
import HospitalAdmin from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/AdminManagement/HospitalAdmin.jsx";
import AddFacility from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/CommonFacilities/AddFacility.jsx";
import UpdateFacility from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/CommonFacilities/UpdateFacility.jsx";
import DeleteFacility from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/CommonFacilities/DeleteFacility.jsx";
import PreviewFacility from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/CommonFacilities/PreviewFacility.jsx";
import AddRoom from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/RoomManagement/AddRoom.jsx";
import UpdateRoom from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/RoomManagement/UpdateRoom.jsx";
import DeleteRoom from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/RoomManagement/DeleteRoom.jsx";
import PreviewRoom from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/RoomManagement/PreviewRoom.jsx";
import AddBed from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/BedManagement/AddBed.jsx";
import UpdateBed from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/BedManagement/UpdateBed.jsx";
import DeleteBed from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/BedManagement/DeleteBed.jsx";
import PreviewBed from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/BedManagement/PreviewBed.jsx";
import PreviewRequest from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/CustomerRequests/PreviewRequest.jsx";
import ApproveRequest from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/CustomerRequests/ApproveRequest.jsx";
import HostelAdminDashboard from "./Dashboards/Views/CoAdminDashboard/HostelAdmin/HostelAdminDashboard.jsx";

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
        <Route exact path="/HostelAdminDashboard" element={<HostelAdminDashboard/>} />
      <Route exact path="/hospital-admin" element={<HospitalAdmin/>} />
      <Route exact path="/add-facility" element={<AddFacility/>} />
      <Route exact path="/update-facility" element={<UpdateFacility/>} />
      <Route exact path="/delete-facility" element={<DeleteFacility/>} />
      <Route exact path="/preview-facility" element={<PreviewFacility/>} />
      <Route exact path="/add-room" element={<AddRoom/>} />
      <Route exact path="/update-room" element={<UpdateRoom/>} />
      <Route exact path="/delete-room" element={<DeleteRoom/>} />
      <Route exact path="/preview-room" element={<PreviewRoom/>} />
      <Route exact path="/add-bed" element={<AddBed/>} />
      <Route exact path="/update-bed" element={<UpdateBed/>} />
      <Route exact path="/delete-bed" element={<DeleteBed/>} />
      <Route exact path="/preview-bed" element={<PreviewBed/>} />
      <Route exact path="/preview-request" element={<PreviewRequest/>} />
      <Route exact path="/approve-request" element={<ApproveRequest/>} />
      </Routes>
      
    </Router>
  );
}
