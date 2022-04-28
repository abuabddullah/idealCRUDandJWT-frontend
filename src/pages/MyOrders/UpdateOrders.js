import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateOrders = () => {
    const {_id} = useParams();
    const [user, loading, error] = useAuthState(auth);
    const { email } = user || {};

    const handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target.title.value
        const description = event.target.description.value
        const date = event.target.date.value
        const picture = event.target.picture.value


        const updateInfo = {
            email,
            title,
            description,
            date,
            picture
        }
        

        const url = `https://damp-sands-73680.herokuapp.com/orders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateInfo),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success('Order Updated Successfully!')
                event.target.reset()
            })
            .catch(err => toast.error(err.message))
            
    }


    return (
        
        <main className='py-5'>
            <div className="container">
                <div className="eventBody">
                    <section className="mainBody">
                        <div className="text-success headline fs-3 fw-bold px-4 pb-4 text-start"><label htmlFor="floatingInput">+ Update Product <small>[ id : {_id} ]</small></label></div>
                        <div className="bg-light p-5 pe-0 minH50vh text-start">

                            <form onSubmit={handleSubmit} className='bg-white p-4 formShaper' >
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Product Title"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Product Title" name="title" required />
                                        </FloatingLabel>

                                        <FloatingLabel controlId="floatingTextarea2" label="Product Description"
                                            className="mb-3">
                                            <Form.Control name="description" required
                                                as="textarea"
                                                placeholder="Short Description"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>



                                    </div>
                                    <div className="col-12 col-md-6">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Product Date"
                                            className="mb-3"
                                        >
                                            <Form.Control type="date" name="date" required placeholder="Product Date" />
                                        </FloatingLabel>

                                        <Form.Group className="mb-3" controlId="uploadPic">
                                            <Form.Label>Banner</Form.Label>
                                            <Form.Control name="picture" required type="text" placeholder="Enter link" />
                                        </Form.Group>


                                    </div>
                                    <div className='text-end'>
                                        <Button variant="success" type="submit" className="mr-3 text-white w-25">Submit</Button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default UpdateOrders;