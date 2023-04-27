import {Button} from 'react-bootstrap';
import { useRef } from 'react';
import { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import '../forms/formresetpassword.css'

export function Upload(prop){
    const fileInputRef = useRef(null);
    const reader = new FileReader();
    const [file, setFile] = useState(null);
    const [show, setShow] = useState(null);
    const handleClose = () => setShow(false);
    const handleClick = () => {
      fileInputRef.current.click();
    };
    
    //const handleSubmit = ()=>{}
    const handleFileChange = (event) => {

      reader.onload = (event) => {
      let image = document.getElementById("uploadImg");
      image.src = event.target.result;
      //image.style.width = "80%";
      };
      reader.readAsDataURL(event.target.files[0]);
      // Perform any other actions with the selected file
      setFile(event.target.files[0]);
    };
    return (<div>
      <img src={"https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"} id="uploadImg" 
      style={{height:"8rem", width:"8rem", borderRadius:"0.5em"}}/><br />
      <Button className='btnupload'  id="uploadBtn" onClick={handleClick}>
    Upload
      </Button>
      <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {/* {file?<Button onClick={handleSubmit} id="uploadBtn" style={{marginLeft:"2%"}}>Upload</Button>:<></>}
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>"Uploaded"</Modal.Title>
        </Modal.Header>
        <Modal.Body>your image uploaded successfully!</Modal.Body>
        <Modal.Footer>
          <Link to='/'><Button variant="primary" onClick={handleClose}>
            OK
          </Button></Link>
        </Modal.Footer>
      </Modal> */}
    </div>);
  }