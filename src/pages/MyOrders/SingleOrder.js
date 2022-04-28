import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useOrders from '../customHooks/useProducts/useOrders/useOrders';

const SingleOrder = ({ order }) => {
    const [orders, setOrders] = useOrders()
    // console.log(orders);
    const { _id, title, date, description, picture } = order || {};

    function refreshPage() {
        window.location.reload(false);
      }

    const handleDelete = (_id) => {
        const allowDelete = window.confirm('Are you sure you want to delete this order ?');
        if (allowDelete) {


            const url = `https://damp-sands-73680.herokuapp.com/orders/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast('Order deleted !');
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== _id);
                        setOrders(remainingOrders);
                        refreshPage()
                    }

                })
                .catch(err => console.log(err));

        }
    }

    const navigate = useNavigate()
    const handleUpdate = (_id) => {
        navigate(`/updateorders/${_id}`)
    }

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
                            <Button onClick={() => handleUpdate(_id)} variant="success" size="lg">
                                Update Now
                            </Button>
                            <Button onClick={() => handleDelete(_id)} variant="danger" size="lg">
                                Delete Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default SingleOrder;