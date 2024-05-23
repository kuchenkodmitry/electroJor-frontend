import React from 'react'
import Header from '../../components/adminPannel/header/index'
import Auth from '../../components/adminPannel/auth/index'
import style from './style.module.css'
import IsAuth from '../../components/adminPannel/isAuth'
import Loading  from "../../components/adminPannel/loading/loading";
import { selectIsAuth, fetchAuthMe } from '../../redux/slices/auth'
import { useSelector, useDispatch } from "react-redux"

function AdminPanel() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const { status } = useSelector((state)=> state.auth)
    const isLoading = status === 'loading'
    React.useEffect(() => {
        dispatch(fetchAuthMe() )
    }, [])
    return (
        <div className={style.backgound}>
            <div className={style.layout}> 
                <Header />
               {isLoading? <Loading/> : (isAuth? <IsAuth /> : <Auth/>)}  
            </div>
        </div>
    )
}

export default AdminPanel