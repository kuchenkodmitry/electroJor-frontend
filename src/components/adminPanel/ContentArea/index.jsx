import { useEffect } from "react";
import style from "./style.module.css";
import FullPost from "../FullPost";
import { useParams } from "react-router-dom";
import CardList from '../Post/cardList';
import EditPost from "../Post/edit";
import EditPhone from "../Phone/edit";
import EditPassword from "../Password/edit";
import { Typography, Box } from "@mui/material";
import { ElectricBolt } from "@mui/icons-material";

function ContentArea() {
    const { params } = useParams();

    const renderContent = () => {
        if (!params) {
            return (
                <Box className={style.welcomeContainer}>
                    <ElectricBolt className={style.welcomeIcon} />
                    <Typography variant="h4" className={style.welcomeTitle}>
                        Панель управления
                    </Typography>
                    <Typography variant="subtitle1" className={style.welcomeSubtitle}>
                        Выберите раздел для редактирования в меню слева
                    </Typography>
                </Box>
            );
        }

        switch (true) {
            case params === 'create':
                return <EditPost />;
            case params === 'posts':
                return <CardList />;
            case params === 'phone':
                return <EditPhone />;
            case params === 'password':
                return <EditPassword />;
            case params.includes('full'):
                return <FullPost id={params.split("-")[1]} />;
            case params.includes('edit'):
                return <EditPost id={params.split("-")[1]} />;
            default:
                return null;
        }
    };

    return (
        <div className={style.contentArea}>
            <div className={style.contentContainer}>
                {renderContent()}
            </div>
        </div>
    );
}

export default ContentArea;