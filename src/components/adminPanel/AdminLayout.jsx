import React from "react";
import Menu from "./Menu";
import { UserIsAuth } from "./Auth";
import ContentArea from "./ContentArea";
import style from "./AdminLayout.module.css";

function AdminLayout({ isMenuOpen, toggleMenu }) {
    return (
        <div className={style.container}>
            <div>
                <UserIsAuth />
                <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
            <ContentArea />
            {isMenuOpen && <div className={style.overlay} onClick={toggleMenu}></div>}
        </div>
    );
}

export default AdminLayout;
