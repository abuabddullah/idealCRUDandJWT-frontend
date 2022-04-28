import React from 'react';
import { Row } from 'react-bootstrap';
import useOrders from '../customHooks/useProducts/useOrders/useOrders';
import SingleOrder from './SingleOrder';

const MyOrders = () => {
    const [orders, setOrders] = useOrders()
    // console.log(orders);
    return (
        <main className='p-5'>
            <div className="container">
                <h2 className="display-3 fw-bold py-5 text-center">Our orders : {orders.length}</h2>
                <Row xs={1} md={2} className="g-4">

                    {
                        orders.map(order => <SingleOrder
                            key={order._id}
                            order={order} />)
                    }

                    
                </Row>
            </div>
        </main>
    );
};

export default MyOrders;