import style from "./style.module.css";
import { Button, TextField, Typography, Box, CircularProgress, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { selectIsAuth, fetchAuth, logout } from "../../../redux/slices/auth";
import { Lock, Person, ExitToApp } from "@mui/icons-material";
import { motion } from "framer-motion";

export const UserIsAuth = () => {
    const { data, status } = useSelector((state) => state.auth);
    const isLoading = status === "loading";
    const dispatch = useDispatch();

    const onClickLogout = () => {
        if (window.confirm('Вы уверены, что хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    };

    return (
        <motion.div
            className={style.userIsAuth}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Box className={style.userInfo}>
                <Typography variant="subtitle1" className={style.greeting}>
                    {isLoading ? (
                        <CircularProgress size={20} />
                    ) : (
                        `Привет, ${data?.fullName ? data.fullName.split(' ')[0] : data?.username || 'Гость'}`
                    )}
                </Typography>
                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<ExitToApp />}
                    onClick={onClickLogout}
                    className={style.logoutBtn}
                >
                    Выйти
                </Button>
            </Box>
        </motion.div>
    );
};

function Auth() {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.auth);
    const isLoading = status === "loading";

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
        mode: 'onChange'
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));

        if (!data.payload) {
            return <Alert severity="error">Не удалось авторизоваться</Alert>;
        }

        if ("token" in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={style.authContainer}
        >
            <Box className={style.authCard}>
                <Typography variant="h5" className={style.authTitle}>
                    <Lock className={style.authIcon} />
                    Авторизация
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} className={style.authForm}>
                    <TextField
                        fullWidth
                        label="Логин"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            startAdornment: <Person className={style.inputIcon} />
                        }}
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message}
                        {...register('username', { required: 'Укажите логин' })}
                    />

                    <TextField
                        fullWidth
                        label="Пароль"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            startAdornment: <Lock className={style.inputIcon} />
                        }}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        {...register('password', { required: 'Укажите пароль' })}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        disabled={!isValid || isLoading}
                        className={style.submitButton}
                    >
                        {isLoading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Войти'
                        )}
                    </Button>
                </form>
            </Box>
        </motion.div>
    );
}

export default Auth;