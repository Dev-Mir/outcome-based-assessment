import React, { useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
// import ReportContent from '../forms/ReportContent';

const Report = () => {
  const [show, setShow] = useState(false);

  const downloadPage = () => {
    const html = document.documentElement.outerHTML;
    const url = URL.createObjectURL(new Blob([html], {type: 'text/html'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


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

             

              <Link to='/courses' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Courses</span>
              </Link>

              <Link to='/managestudents' className='nav-link'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Manage Students</span>
              </Link>

              <Link to='/report' className='nav-link active'>
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

{/* --------------------------------------------------------------- */}


            {/* ------------------------------------------------------------------ */}

<div className='content'>

  <div className='heading'>
    
    <p>Report</p>

  <button onClick={downloadPage} > Download report </button>
  {/* onClick={() => setShowForm(!showForm)}  */}

</div>

<div className="search">

    <div className='resultreport'>

      

    <button  > CLOs Result </button>

    <button  > PLOs Result </button>

    {/* </div>  */}

    {/* <div className='report'> */}

    <button  > CLOs Report </button>

    <button  > PLOs Report </button>


    </div>


</div> 

<div className='coursedetails'>

<table>
<thead>
  <tr>
    <th>CMS ID</th>
    <th>Full Name</th>
    <th>Gender</th>
    <th>Current semester</th>
  </tr>
</thead>
</table>      


</div>

<div className='coursedata'>

  {/* <table>
  <thead>
    <tr>
      <th>Course Code</th>
      <th>Course Name</th>
      <th>Program</th>
      <th>Semester</th>
    </tr>
  </thead>
  </table>       */}

  <div className="centered">

  {/* { showForm? null: <p>No Students added yet </p>} */}

  </div>   

  <div className='stdfrom'>

      {/* {showForm?<StdForm setShowForm={setShowForm} />:null} */}

  </div>   
   
</div>

</div>



      
    </main>
  );
};

export default Report;