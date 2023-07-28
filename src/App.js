import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import Home from './components/homepage'
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import UpdateProfile from "./components/updateprofile"
import Courses from "./components/courses";
import About from "./components/about";
import Contact from "./components/contact";
import Playlist from "./components/playlist";
// import TeacherProfile from "./components/teacher_profile";
import Userlist from "./components/Userlist";
import Contributors from "./components/Contributors";
import ContributorForm from "./components/contributorform";
import OTP from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import WatchVideo from "./components/watch_video";
import Sem_1_Fop_Units from "./components/Sem_1_Fop_Units";
import Sem_1_Maths_Units from "./components/Sem_1_Maths_Units";
import Sem_1_Eoc_Units from "./components/Sem_1_Eoc_Units";
import Sem_1_Eg_Units from "./components/Sem_1_Eg_Units";
import Sem_1_Ep_Units from "./components/Sem_1_Ep_Units";
import Sem_1_Es_Units from "./components/Sem_1_Es_Units";
import Sem_2_Oopc_Units from "./components/Sem_2_Oopc_Units";
import Sem_2_Maths_Units from "./components/Sem_2_Maths_Units";
import Sem_2_Beee_Units from "./components/Sem_2_Beee_Units";
import Sem_2_Fme_Units from "./components/Sem_2_Fme_Units";
import Sem_2_Bcps_Units from "./components/Sem_2_Bcps_Units";
import Sem_2_Workshop_Units from "./components/Sem_2_Workshop_Units";
import Sem_3_Dsa_Units from "./components/Sem_3_Dsa_Units";
import Sem_3_Maths_Units from "./components/Sem_3_Maths_Units";
import Sem_3_Dbms_Units from "./components/Sem_3_Dbms_Units";
import Sem_3_De_Units from "./components/Sem_3_De_Units";
import Sem_3_Itw_Units from "./components/Sem_3_Itw_Units";
import Sem_4_Oopj_Units from "./components/Sem_4_Oopj_Units";
import Sem_4_Psnm_Units from "./components/Sem_4_Psnm_Units";
import Sem_4_Os_Units from "./components/Sem_4_Os_Units";
import Sem_4_Coa_Units from "./components/Sem_4_Coa_Units";
import Sem_4_Pom_Units from "./components/Sem_4_Pom_Units";
import Sem_5_Ajp_Units from "./components/Sem_5_Ajp_Units";
import Sem_5_Daa_Units from "./components/Sem_5_Daa_Units";
import Sem_5_Se_Units from "./components/Sem_5_Se_Units";
import Sem_5_Toc_Units from "./components/Sem_5_Toc_Units";
import Sem_5_Cn_Units from "./components/Sem_5_Cn_Units";
import Sem_5_Map_Units from "./components/Sem_5_Map_Units";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playlist" element={<Playlist />} />
        {/* <Route path="/teacherProfile" element={<TeacherProfile />} /> */}
        <Route path="/contributors" element={<Contributors/>} />
        <Route path="/userlist" element={<Userlist/>} />
        <Route path="/contributorform" element={<ContributorForm/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/watchvideo" element={<WatchVideo/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/sem_1_fop_units" element={<Sem_1_Fop_Units/>} />
        <Route path="/sem_1_maths_units" element={<Sem_1_Maths_Units/>} />
        <Route path="/sem_1_eoc_units" element={<Sem_1_Eoc_Units/>} />
        <Route path="/sem_1_eg_units" element={<Sem_1_Eg_Units/>} />
        <Route path="/sem_1_ep_units" element={<Sem_1_Ep_Units/>} />
        <Route path="/sem_1_es_units" element={<Sem_1_Es_Units/>} />
        <Route path="/sem_2_oopc_units" element={<Sem_2_Oopc_Units/>} />
        <Route path="/sem_2_maths_units" element={<Sem_2_Maths_Units/>} />
        <Route path="/sem_2_beee_units" element={<Sem_2_Beee_Units/>} />
        <Route path="/sem_2_fme_units" element={<Sem_2_Fme_Units/>} />
        <Route path="/sem_2_bcps_units" element={<Sem_2_Bcps_Units/>} />
        <Route path="/sem_2_workshop_units" element={<Sem_2_Workshop_Units/>} />
        <Route path="/sem_3_dsa_units" element={<Sem_3_Dsa_Units/>} />
        <Route path="/sem_3_maths_units" element={<Sem_3_Maths_Units/>} />
        <Route path="/sem_3_dbms_units" element={<Sem_3_Dbms_Units/>} />
        <Route path="/sem_3_de_units" element={<Sem_3_De_Units/>} />
        <Route path="/sem_3_itw_units" element={<Sem_3_Itw_Units/>} />
        <Route path="/sem_4_oopj_units" element={<Sem_4_Oopj_Units/>} />
        <Route path="/sem_4_psnm_units" element={<Sem_4_Psnm_Units/>} />
        <Route path="/sem_4_os_units" element={<Sem_4_Os_Units/>} />
        <Route path="/sem_4_coa_units" element={<Sem_4_Coa_Units/>} />
        <Route path="/sem_4_pom_units" element={<Sem_4_Pom_Units/>} />
        <Route path="/sem_5_ajp_units" element={<Sem_5_Ajp_Units/>} />
        <Route path="/sem_5_daa_units" element={<Sem_5_Daa_Units/>} />
        <Route path="/sem_5_se_units" element={<Sem_5_Se_Units/>} />
        <Route path="/sem_5_toc_units" element={<Sem_5_Toc_Units/>} />
        <Route path="/sem_5_cn_units" element={<Sem_5_Cn_Units/>} />
        <Route path="/sem_5_map_units" element={<Sem_5_Map_Units/>} />




      </Routes>
    </Router>
  );
}

export default App;
