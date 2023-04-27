// Not in used

import React, { useState } from 'react';
import '../components/components_content.css';
import { Link, useNavigate } from 'react-router-dom';
// import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from '@mui/icons-material/Close';

function CourseForm(setShowForm) {
  const [universityName, setUniversityName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [program, setProgram] = useState('');
  const [semester, setSemester] = useState('');

  const navigate = useNavigate();



  const handleSave = (e) => {
    e.preventDefault();
    // You can perform any actions here to save the form data
    console.log('Saving course information:', {
      universityName,
      courseCode,
      courseName,
      program,
      semester,
    });
  };

  const handleCancel = () => {
    // You can perform any actions here to cancel the form
    // navigate("/profile"); 
    setShowForm = false;

  };

  return (
    <form className='courseform'>

        <div className='courseinformation'>
            
            <p> <u> Course information</u></p>   
             <div className='xicon' onClick={handleCancel}><CloseIcon /> </div>

            


        </div>

      <div><br/>
        <label htmlFor="universityName">University Name</label>
        <input
          type="text"
          id="universityName"
          value={universityName}
          onChange={(e) => setUniversityName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="courseCode">Course Code</label>
        <input
          type="text"
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="courseName">Course Name</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="program">Program</label>
        <input
          type="text"
          id="program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="semester">Semester</label>
        <input
          type="text"
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
      </div>
      <div>
        
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>

        <button type="submit" onClick={handleSave}>
          Save Course Information
        </button>

      </div>
    </form>
  );
}

export default CourseForm;
