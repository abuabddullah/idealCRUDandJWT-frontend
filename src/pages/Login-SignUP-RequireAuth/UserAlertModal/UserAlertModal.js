import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserAlertModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow} size="lg">
                Order Now
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Loggin in Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                You are not Logged In Plz Login First
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button as={Link} to='/login' variant="success">Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserAlertModal;