import React, { useState , useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import CloseIcon from '@mui/icons-material/Close';
import './dashboard.css';
import './components_content.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';


const Dashboard = () => {

 
  
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showTable, setshowTable] = useState(true);
  


  const [universityName, setUniversityName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [program, setProgram] = useState('');
  const [semester, setSemester] = useState('');
  const [arr, setArr] = useState([]);
  // const [saveData, setSaveData] = useState(false);

  const [isEditing, setisEditing] = useState(false);
  const [isSave, setisSave] = useState(false);

  const [noCourseadded, setnoCourseadded] = useState("No course added yet");
  const [saveCourse, setSaveCourse] = useState('');

  // const saveCourse = (e) => {
  //   e.preventDefault();

  //   setnoCourseadded("IBA");
  // }

  // const navigate = useNavigate();



  const handleSave = (e) => {
    e.preventDefault();
    // You can perform any actions here to save the form data
    // console.log('Saving course information:', {
    //   universityName,
    //   courseCode,
    //   courseName,
    //   program,
    //   semester,
    // });

    setShowForm(false);
    setshowTable(false);

    setArr(arr=>{arr.push({universityName, courseCode,courseName, program, semester}); return arr;});


  };

  const handleCancel = () => {
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

          <Link to='/dashboard' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
             
              <img src={logo} alt="logo" className="logo" />

            </Link>


            <Link to='/dashboard' className='nav-link active'>
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


    <div className='content'>

        <div className='heading'>
            
            <p>Courses</p>

          <button onClick={() => setShowForm(!showForm)}  > Add new course </button>

        </div>

        <div className='coursedetails'>

        <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Program</th>
            <th>Semester</th>
          </tr>
        </thead>
        </table>      


        </div >

        <div className='coursedata' >

          <div className="centered">

          { showForm ? null: 

          // <div className='tabelindiv'>
          
          <table className='courseTable'>

            <tbody>
            {arr.map((a, i)=>
            
            <tr key={i} className='courseTr'> 
            
                        <td className='coursetd'>

                        {isEditing ? (
                      <input className='editcourse' type="text" value={courseCode} 
                      onChange={(e) => setCourseCode(e.target.value)} />
                    ) : (
                      <p>{courseCode}</p>
                    )}

                        </td>



                        <td className='coursetd'>

                        {isEditing ? (
                      <input className='editcourse' type="text" value={courseName} 
                      onChange={(e) => setCourseName(e.target.value)} />
                    ) : (
                      <p>{courseName}</p>
                    )}

                        </td>


                        <td className='coursetd'>

                        {isEditing ? (
                      <input className='editcourse' type="text" value={program} 
                      onChange={(e) => setProgram(e.target.value)} />
                    ) : (
                      <p>{program}</p>
                    )}

                        </td>

                        <td className='coursetd'>

                        {isEditing ? (
                      <input className='editcourse' type="text" value={semester} 
                      onChange={(e) => setSemester(e.target.value)} />
                    ) : (
                      <p>{semester}</p>
                    )}

                        </td>


                        <td className='edicons'>

                        <EditIcon onClick={() => setisEditing(true)}/>  
                  
                  { isEditing ? <SaveIcon onClick={() => setisEditing(false)} /> : <DeleteIcon/>} 
                  



                        </td>

                        
                         
            </tr>)}

          </tbody>
          </table>

          // </div>
          }


        
          </div>   

          <div>

{/* -------------------------------Form start--------------------------------- */}

              {showForm?
              
              <form className='courseform'>

        <div className='courseinformation'>
            
            <p> <u> Course information</u></p>   
             <div className='xicon'  onClick={() => setShowForm(false)}  ><CloseIcon /> </div>

            


        </div>

      {/* <div><br/>
        <label htmlFor="universityName">University Name</label>
        <input
          type="text"
          id="universityName" 
          value={universityName}
          onChange={(e) => setUniversityName(e.target.value)
             }
        />
      </div><br/> */}
      <br/>
      <div>
        <label htmlFor="courseCode">Course Code</label><br/>
        <input
        className='input'
          type="text"
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required/>
      </div><br/>
      <div>
        <label htmlFor="courseName">Course Name</label>
        <input
        className='input'
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        required  />
      </div><br/>
      <div>
        <label htmlFor="program">Program</label><br/>
        <input
        className='input'
          type="text"
          id="program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        required/>
      </div><br/>
      <div>
        <label htmlFor="semester">Semester</label><br/>
        <input
        className='input'
          type="text"
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
       required />
      </div>
      <div>
        
        <button type="button"  onClick={() => setShowForm(false)}>
          Cancel
        </button>

          <button type="submit" onClick={handleSave }>
          Save Course Information
        </button>

      </div>
    </form>

              
              
              :null}


{/* -------------------------------Form end--------------------------------- */}


          </div>   
           
        </div>
      
      </div>

</main>

);
};

export default Dashboard;