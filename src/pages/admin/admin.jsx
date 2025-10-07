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
import SEO from '../../components/SEO';

function AdminPanel() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const { status } = useSelector((state)=> state.auth);
    const isLoading = status === 'loading';
    const [exists, setExists] = React.useState(true);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    React.useEffect(() => {
        dispatch(fetchAuthMe());
        axios.get('/admin-exists').then(res => setExists(res.data.exists));
    }, []);
    return (
        <div className={style.background}>
            <SEO
                title="Панель администратора — ЭлектроТочка34"
                description="Панель управления сайтом ЭлектроТочка34."
                canonical="https://example.com/admin"
                og={{
                    title: "Панель администратора — ЭлектроТочка34",
                    description: "Панель управления сайтом ЭлектроТочка34.",
                    type: "website",
                    image: "https://example.com/logo192.png"
                }}
                twitter={{
                    card: "summary_large_image",
                    title: "Панель администратора — ЭлектроТочка34",
                    description: "Панель управления сайтом ЭлектроТочка34.",
                    image: "https://example.com/logo192.png"
                }}
                robots="noindex, nofollow"
            />
            <div className={style.layout}>
                <Header onMenuToggle={toggleMenu} />
                {isLoading ? (
                    <Loading />
                ) : isAuth ? (
                    <AdminLayout isMenuOpen={menuOpen} toggleMenu={toggleMenu} />
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

