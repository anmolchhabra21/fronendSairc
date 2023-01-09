import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './SideBarEditModal.css'

function SideBarEditModal(props) {
  const [show, setShow] = useState(props.show);
//   alert("Found the true")

  const handleClose = () => setShow(false);
//   if(
//   props.showModal == "true"){
//     handleClose =() => setShow(true);
//     alert("Found the true")
//   }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal className='SideBarModal_main' show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title><h1>Edit Info</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder="New Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Profile Photo</Form.Label>
              <Form.Control
                type="image"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>New Tagline</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    </>
  );
}

export default SideBarEditModal