import React, { useState } from 'react';
import '../components/components_content.css';
import { Link, useNavigate } from 'react-router-dom';
// import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from '@mui/icons-material/Close';

function StdForm({setShowForm}) {

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
    <form className='courseform'>

        <div className='courseinformation'>
            
            <p> <u> Student's information</u></p>   
             <div className='xicon' onClick={handleCancel}><CloseIcon /> </div>

            


        </div>

      <div><br/>
        <label htmlFor="stdid">Student's ID</label>
        <input
          type="text"
          id="stdid"
          value={stdid}
          onChange={(e) => setStdid(e.target.value)}
        />
      </div><br/>
      <div>
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div><br/>
      <div>
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div><br/>
      <div>
        <label htmlFor="semester">Current semester</label>
        <input
          type="text"
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
      </div>
     
      <div>
        
        <button className='btnclosestdform' type="button" onClick={handleCancel}>
          Cancel
        </button>

        <button  className='btnsavestdform' type="submit" onClick={handleSave}>
          Save student
        </button>

      </div>
    </form>
  );
}

export default StdForm;
