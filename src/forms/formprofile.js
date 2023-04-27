import React, { useState } from 'react';
import  './formresetpassword.css';
import {  useNavigate } from 'react-router-dom';
import { Upload } from '../components/Upload';

function Formprofile() {


  const [Name, setName] = useState('');
  const [insID, setinsID] = useState('');
  const [email, setemail] = useState('');
  const [program, setprogram] = useState('');
  const [semester, setSemester] = useState('');

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // You can perform any actions here to save the form data
    console.log('Saving course information:', {
      Name,
      insID,
      email,
    //   cnewPass,
      semester,
    });
  };

  const handleCancel = () => {
    // You can perform any actions here to cancel the form
    // navigate("/profile"); 
    // setShowForm = false;
  };

  return (
    <form className='resetform'>

        <div className='resetpassword'>
            
            <p> <u> Profile</u></p>     
           
        </div>

      <div className='namelabel'>

      <div className='upload'> <Upload/> </div>

      <h3> <u> Name : </u></h3>

        <div className='profilename'>
        <h4>Mir Hussain</h4>  
        </div><br/><br/>
{/* ------------------------------------------------------ */}
        <h3> <u> Instructor ID : </u></h3>

          <div className='profilename'>
          <h4>INS-0123</h4>  
          </div><br/><br/>

{/* ------------------------------------------------------ */}

        <h3> <u> Email : </u></h3>

        <div className='profilename'>
        <h4>mirhussain@gmail.com</h4>  
        </div>
      
      </div>
     



     









      
      
    
    </form>
  );
}

export default Formprofile;
