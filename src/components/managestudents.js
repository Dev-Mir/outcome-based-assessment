import React, { useState } from 'react';
import './dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";
import StdForm from '../forms/StdForm';


import './components_content.css';
// import { Link,  } from 'react-router-dom';
// import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from '@mui/icons-material/Close';



const Managestudents = () => {

  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);


  const [stdid, setStdid] = useState('');
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [semester, setSemester] = useState('');

  const navigate = useNavigate();



  const handleSave = (e) => {
    e.preventDefault();
    // You can perform any actions here to save the form data
    console.log('Saving course information:', {
      stdid,
      fullname,
      gender,
      semester,
      
    });
  };

  const handleCancel = () => {
    // You can perform any actions here to cancel the form
    // navigate("/profile"); 
    setShowForm = false;
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

              <Link to='/managestudents' className='nav-link active'>
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

      
      {/* ------------------------------------------------------------------ */}


      <div className='content'>

<div className='heading'>
    
    <p>Students</p>

  <button onClick={() => setShowForm(!showForm)}  > Add new student </button>

</div>

<div className="search">


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

  { showForm? null: <p>No Students added yet </p>}

  </div>   

  <div className='stdfrom'>

      {showForm?
      
// -----------------------------Student form start--------------------------------------------------      
      
<form className='courseform'>

<div className='courseinformation'>
    
    <p> <u> Student's information</u></p>   
     <div className='xicon' onClick={() => setShowForm(false)} ><CloseIcon /> </div>

    


</div>

<div><br/>
<label htmlFor="stdid">Student's ID</label><br/>
<input
className='input'
  type="text"
  // id="stdid"
  value={stdid}
  onChange={(e) => setStdid(e.target.value)}
/>
</div><br/>
<div>
<label htmlFor="fullname">Full name</label><br/>
<input
className='input'
  type="text"
  id="fullname"
  value={fullname}
  onChange={(e) => setFullname(e.target.value)}
/>
</div><br/>
<div>
<label htmlFor="gender">Gender</label><br/>
<input
className='input'
  type="text"
  id="gender"
  value={gender}
  onChange={(e) => setGender(e.target.value)}
/>
</div><br/>
<div>
<label htmlFor="semester">Current semester</label><br/>
<input
className='input'
  type="text"
  id="semester"
  value={semester}
  onChange={(e) => setSemester(e.target.value)}
/>
</div>

<div>

<button className='btnclosestdform' type="button" onClick={() => setShowForm(false)}>
  Cancel
</button>

<button  className='btnsavestdform' type="submit" onClick={handleSave}>
  Save student
</button>

</div>
</form>
     




// -----------------------------Student form start--------------------------------------------------      


      :null}

  </div>   
   
</div>

</div>



    </main>
  );
};

export default Managestudents;