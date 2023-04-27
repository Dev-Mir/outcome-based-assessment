import React, { useState } from "react";
import './loginform.css';
import { useNavigate  } from "react-router-dom"; 
import logo from "../images/logo.png";

const LoginForm = () => {

  const [popupStyle, showPopup] = useState("hide");
  const navigate = useNavigate();

  const popup = () => {
    showPopup("login-popup");
    // setTimeout(() => showPopup("hide"), 3000)
  };

  const handleLogin = () => {
    navigate("/dashboard"); // replace "/dashboard" with  dashboard page path
  };


  return (

    <div className="main">

    <div className="cover">

      <img src={logo} alt="logo" className="logo" />
      <h2 className="title">WELCOME</h2>
      <div className="textfield">
        <input type="text" placeholder="username" className="uname" />
        <br></br>
        <input type="password" placeholder="password" />
      </div>
      <div className="login-btn" onClick={handleLogin}>
        Login
      </div>

      <p className="forget">
        {" "}
        <u> Forget Password </u>{" "}
      </p>

      <div className={popupStyle}>
        <p>
          Login Failed! <br></br> Username or Password incorrect
        </p>
      </div>

    </div>



    <div className="footer">

    <p> <u>
    About More</u><br/>
    OBA is web based information system which facilities institutes to manage quality of
    education using Outcome Bases Assessment (OBA) Methodology
    <br/><br/>

    <div className="cr">Copyright © 2023
    All rights reserved.
    </div>

    </p>
    
    </div>

    </div>

  );
};

export default LoginForm;
