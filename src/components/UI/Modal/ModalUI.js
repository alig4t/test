import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

import './ModalUI.css'

const ModalUI = (props) => {
  let closeIcon = {
    position: 'absolute',
    left: '13px',
    top: '13px',
  }
  let closeBtn = {
    position: 'absolute',
    left: '13px',
    bottom: '13px',
  }

  const [show, setShow] = useState(props.show);
  const handleShow = () => setShow(true);

  let modalElement = '';

  if (props.modalType == 'food') {
    modalElement = (
      <Modal show={props.show} onHide={props.handleClose}
        size="lg"
        centered
      >
      <Modal.Body className='d-flex justify-content-start p-0'>
      <div className="container-fluid">
        <div className="row pb-4 pb-lg-0">
          <div className="col-lg-6 p-0 pt-5 p-lg-0">
            <img src={`./assets/img/products/${props.item.imgPath}`} className="img-fluid w-100" />
          </div>
          <div className="col-lg-6 py-3 py-lg-5 px-4">
            <button type="button" className="btn-close m-0 close-modal-icon" onClick={props.handleClose} style={closeIcon}></button>
            <h6 className="display-6">{props.item.title}</h6>
            <span className="d-block my-lg-3">
              <strong id="popupPrice">{(props.item.price * (100 - props.item.offPercent)) / 100}</strong>
              تومان
            </span>
            <p className="text-justify">{props.item.desc}</p>
            <button type="button" className="btn btn-danger" onClick={props.handleClose} style={closeBtn}>بستن</button>
          </div>
        </div>
      </div>
      </Modal.Body>
      </Modal>
    )
  }
  if (props.modalType == 'loginform') {
    modalElement = (
      <Modal show={props.show} onHide={props.handleClose} size='sm' backdrop="static" keyboard={false}>
      <Modal.Header className='py-2 px-3'>
        <Modal.Title className='h6'>ورود / ثبت نام</Modal.Title>
        <button type="button" className="btn-close m-0" onClick={props.handleClose} aria-label="Close"></button>
      </Modal.Header>
      <Modal.Body>
      <Form.Label>شماره موبایل</Form.Label>
      <Form.Control type="text" placeholder="" />
      <Button variant="danger" size="sm" className='mt-4 mr-2' type="submit">
        ورود
      </Button>
        </Modal.Body>

    </Modal>
    )
  }


  return (
    <>    
          {modalElement}
    </>
  );
}
export default ModalUI