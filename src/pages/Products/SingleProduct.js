import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UserAlertModal from '../Login-SignUP-RequireAuth/UserAlertModal/UserAlertModal';

const SingleProduct = ({ product }) => {
    // console.log(product);
    const { _id, title, date, description, picture } = product || {};


    const [user, loading, error] = useAuthState(auth);
    const { email } = user || {};

    const handleOrder = (product) => {
        // console.log(product);
        const orderInfo = {
            email,
            title,
            picture,
            description,
            date,
        };

        const url = `https://damp-sands-73680.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success('Order Successful', { id: 'order' });
            })
            .catch(err => console.log(err));
    };


    return (
        <Col>
            <Card>
                <div className="row">
                    <div className="col-4">
                        <Card.Img className='img-fluid' variant="top" src={picture} />
                    </div>
                    <div className="col-8">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text>
                                Date : {date}
                            </Card.Text>
                        </Card.Body>
                        <div className="d-grid gap-2 mb-3 mx-4">
                            {
                                user ? <Button onClick={() => handleOrder(product)} variant="success" size="lg">
                                    Order Now
                                </Button> : <UserAlertModal />
                            }
                            {/* <Button as={Link} to={`/updatePd/${_id}`} variant="success" size="lg">
                                Update Now
                            </Button> */}
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default SingleProduct;