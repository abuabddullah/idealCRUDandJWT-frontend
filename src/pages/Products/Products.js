import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../customHooks/useProducts/useProducts';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useProducts()
    return (
        <main className='p-5'>
            <div className="container">
                <h2 className="display-3 fw-bold py-5 text-center">Our Products : {products.length}</h2>
                <Row xs={1} md={2} className="g-4">

                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product} />)
                    }

                    
                </Row>
            </div>
        </main>
    );
};

export default Products;