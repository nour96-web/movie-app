import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const AddMovie = ({handleAdd}) => {
// states

const [name, setName] = useState("");
const [imgUrl, setImgUrl] = useState("");
const [rate, setRate] = useState(0);
const [desc, setDesc] = useState("");



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


// fonctions

const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
        id: Math.random(),
        name :  name,
        imgUrl : imgUrl,
        descip : desc,
        rating : rate,
    };
    handleAdd(newMovie);

    if (name && imgUrl && desc && rate) {
        handleAdd(newMovie);
        handleClose();
    }  else {alert("please fill all the form")}
   
}

  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
         Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie information</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <form action="" 
            style={{ 
                display: 'flex', 
                flexDirection: "column", 
                flexWrap : "wrap", 
                alignItems : "center" 
                }}
                onSubmit={handleSubmit}
                >
                <label htmlFor=''>Movie Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <label htmlFor=''>Cover URL:</label>
                <input type="text" value={imgUrl} onChange={(e)=> setImgUrl(e.target.value)}  />
                <label htmlFor=''>Rating :</label>
                <input type="number"  value={rate} onChange={(e)=> setRate(e.target.value)}  />
                <label htmlFor=''>Description :</label>
                <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)}  />
                <Button variant="primary" type="submit">
            Save Changes
          </Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie