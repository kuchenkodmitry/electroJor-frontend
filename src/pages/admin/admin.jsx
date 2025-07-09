import React from 'react';
import Header from '../../components/adminPanel/Header';
import Auth from '../../components/adminPanel/Auth';
import Register from '../../components/adminPanel/Register';
import style from './style.module.css';
import AdminLayout from '../../components/adminPanel/AdminLayout';
import Loading  from '../../components/adminPanel/Loading/loading';
import { selectIsAuth, fetchAuthMe } from '../../redux/slices/auth';
import { useSelector, useDispatch } from "react-redux";
import axios from '../../axios/axios';

function AdminPanel() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const { status } = useSelector((state)=> state.auth);
    const isLoading = status === 'loading';
    const [exists, setExists] = React.useState(true);

    React.useEffect(() => {
        dispatch(fetchAuthMe());
        axios.get('/admin-exists').then(res => setExists(res.data.exists));
    }, []);
    return (
        <div className={style.background}>
            <div className={style.layout}> 
                <Header />
               {isLoading ? (
                   <Loading />
               ) : isAuth ? (
                   <IsAuth />
               ) : exists ? (
                   <Auth />
               ) : (
                   <Register />
               )}
            </div>
        </div>
    )
}

export default AdminPanel
