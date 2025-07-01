import style from '../auth/style.module.css';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegister } from '../../../redux/slices/auth';

function Register() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      alert('Не удалось создать администратора');
    } else if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  return (
    <div className={style.authBox}>
      <Typography sx={{ fontSize: '22px', fontFamily: 'Inter-SemiBold', width: '370px' }} className={style.title}>
        Создайте администратора
      </Typography>
      <form className={style.fromAuth} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.auth}>
          <div className={style.inputBox}>
            <Typography sx={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }}>
              Введите логин
            </Typography>
            <input className={style.inputS} {...register('username', { required: 'Укажите логин' })} />
          </div>
          <div className={style.inputBox}>
            <Typography sx={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }}>
              Введите пароль
            </Typography>
            <input type="password" className={style.inputS} {...register('password', { required: 'Укажите пароль' })} />
          </div>
        </div>
        <Button sx={{ color: 'black', marginLeft: '162px', marginTop: '30px', fontFamily: 'SourceCodePro-SemiBold' }} className={style.button} type="submit">
          Создать
        </Button>
      </form>
    </div>
  );
}

export default Register;
