import style from "./style.module.css";
import Button from "../button/index";
import { Typography } from "@mui/material";
import { ElectricBolt, Edit, Add, Reviews, Contacts, Construction, Settings, AccountCircle, ArrowDownward } from "@mui/icons-material";

const btnData = [
    {
        menuTitle: "Редактирование постов",
        btn: [
            {
                Icon: Edit,
                btnName: "Редактировать",
                linkTo: '/admin/posts',
                color: "#4CAF50"
            },
            {
                Icon: Add,
                btnName: "Создать пост",
                linkTo: '/admin/create',
                color: "#2196F3"
            }
        ]
    },
    {
        menuTitle: "Управление отзывами",
        btn: [
            {
                Icon: Reviews,
                btnName: "Загрузка и удаление",
                color: "#FF9800"
            },
        ]
    },
    {
        menuTitle: "Контактная информация",
        btn: [
            {
                Icon: Contacts,
                btnName: "Изменить",
                linkTo: '/admin/phone',
                color: "#9C27B0"
            },
        ]
    },
    {
        menuTitle: "Блоки услуг",
        btn: [
            {
                Icon: Construction,
                btnName: "Редактировать",
                color: "#00BCD4"
            },
        ]
    },
    {
        menuTitle: "Шапка сайта",
        btn: [
            {
                Icon: Settings,
                btnName: "Изменить",
                color: "#607D8B"
            },
        ]
    },
    {
        menuTitle: "О компании",
        btn: [
            {
                Icon: AccountCircle,
                btnName: "Изменить описание",
                color: "#E91E63"
            },
        ]
    },
    {
        menuTitle: "Аккаунт",
        btn: [
            {
                Icon: Settings,
                btnName: "Сменить пароль",
                linkTo: '/admin/password',
                color: "#795548"
            },
        ]
    },
];

function Menu() {
    return (
        <div className={style.adminPanel}>
            <div className={style.header}>
                <ElectricBolt className={style.logoIcon} />
                <Typography variant="h6" className={style.title}>
                    Админ-панель
                </Typography>
                <Typography variant="body2" className={style.subtitle}>
                    Электромонтажные работы
                </Typography>
                <ArrowDownward className={style.arrowIcon} />
            </div>

            <div className={style.menuContainer}>
                {btnData.map((section, i) => (
                    <div className={style.menuSection} key={i}>
                        <Typography variant="subtitle1" className={style.sectionTitle}>
                            {section.menuTitle}
                        </Typography>
                        <div className={style.buttonsContainer}>
                            {section.btn.map((btn, index) => (
                                <Button
                                    key={index}
                                    path={btn.linkTo}
                                    Icon={btn.Icon}
                                    text={btn.btnName}
                                    color={btn.color}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={style.footer}>
                <Typography variant="caption">
                    © {new Date().getFullYear()} Электромонтаж
                </Typography>
            </div>
        </div>
    );
}

export default Menu;