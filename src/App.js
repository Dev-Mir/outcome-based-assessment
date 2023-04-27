import LoginForm from "./components/loginform";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Courses from "./components/courses";
import Managestudents from "./components/managestudents";
import Profile from "./components/profile";
import Report from "./components/report";
import Resetpassword from "./components/resetpassword";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <div className="page">

    <BrowserRouter>
      <Routes>

      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />    
      <Route path="/home" element={<Home />} />  
      <Route path="/courses" element={<Courses />} />  
      <Route path="/managestudents" element={<Managestudents />} />  
      <Route path="/profile" element={<Profile />} />  
      <Route path="/report" element={<Report />} />  
      <Route path="/resetpassword" element={<Resetpassword />} />
        
        

      </Routes>
    </BrowserRouter>

      </div>
  
  );
}

export default App;




