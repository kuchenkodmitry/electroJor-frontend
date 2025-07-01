import React from 'react';
import Header from '../../components/adminPannel/header/index';
import Auth from '../../components/adminPannel/auth/index';
import Register from '../../components/adminPannel/register/index';
import style from './style.module.css';
import IsAuth from '../../components/adminPannel/isAuth';
import Loading  from "../../components/adminPannel/loading/loading";
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
        <div className={style.backgound}>
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
