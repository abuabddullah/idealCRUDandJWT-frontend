import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../sharedPages/Loading/Loading';

const useOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    // console.log(email);

    useEffect(() => {
        const email = user?.email;
        const url = `https://damp-sands-73680.herokuapp.com/orders?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err));
    }, []);
    return [orders, setOrders]
};

export default useOrders;