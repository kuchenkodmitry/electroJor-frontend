import React from "react";
import Menu from "./Menu";
import { UserIsAuth } from "./Auth";
import ContentArea from "./ContentArea";
import style from "./AdminLayout.module.css";

function AdminLayout() {
    return (
        <div className={style.container}>
            <div>
                <UserIsAuth />
                <Menu />
            </div>
            <ContentArea />
        </div>
    );
}

export default AdminLayout;
