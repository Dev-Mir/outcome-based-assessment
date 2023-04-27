import React, { useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import { Upload } from './Upload';


const Courses = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>

      <header className={`header ${show ? 'space-toggle' : null}`}>
      <h2 className='projectname'> Outcome Based Assessment </h2>
       <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>

        <nav className='nav'>

          <div>

          <Link to='/home' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
             
              <img src={logo} alt="logo" className="logo" />

            </Link>

            <Link to='/dashboard' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
        
            <div className='nav-list'>
              <Link to='/profile' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Profile</span>
              </Link>

              

              <Link to='/courses' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Courses</span>
              </Link>

              <Link to='/managestudents' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Manage Students</span>
              </Link>

              <Link to='/report' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Report</span>
              </Link>

              <Link to='/resetpassword' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Reset Password</span>
              </Link>
              


            </div>
          </div>

          <Link to='/' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

      <h1>Courses</h1>
    </main>
  );
};

export default Courses;