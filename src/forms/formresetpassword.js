import React, { useState } from 'react';
import  './formresetpassword.css';
import {  useNavigate } from 'react-router-dom';

function Formresetpassword() {


  const [newPass, setnewPass] = useState('');
  const [cnewPass, setcnewPass] = useState('');
  
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // You can perform any actions here to save the form data
    console.log('Saving course information:', {
      newPass,
      cnewPass,
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
            
            <p> <u> Reset password</u></p>     
          

        </div>


      <div>
        <label htmlFor="newpassword">New password</label><br/><br/>
        <input
          type="password"
          id="newpassword"
          value={newPass}
          onChange={(e) => setnewPass(e.target.value)}
        />
      </div><br/><br/>
      <div>
        <label htmlFor="cnewpassword">Confirm new password</label><br/><br/>
        <input
          type="password"
          id="cnewpassword"
          value={cnewPass}
          onChange={(e) => setcnewPass(e.target.value)}
        />
      </div>
    
      <div>
      <br/>
        <button className='btnclose' type="button" onClick={handleCancel}>
          Cancel
        </button>

        <button className='btnsave' type="submit" onClick={handleSave}>
          Save
        </button>

      </div>
    </form>
  );
}

export default Formresetpassword;
