import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../redux/slices/auth";
import { TextField, Button, Typography } from "@mui/material";
import style from "./style.module.css";

function EditPassword() {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSave = async () => {
    const { error } = await dispatch(changePassword({ oldPassword, newPassword }));
    if (!error) {
      setOldPassword('');
      setNewPassword('');
      alert('Пароль обновлён');
    } else {
      alert('Не удалось изменить пароль');
    }
  };

  return (
    <div className={style.container}>
      <Typography
        sx={{
          fontFamily: "SourceCodePro-SemiBold",
          fontSize: "24px",
          textAlign: "center",
          marginTop: "27px",
          marginBottom: "20px",
        }}
      >
        Сменить пароль
      </Typography>
      <TextField
        className={style.input}
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        label="Старый пароль"
        type="password"
        variant="outlined"
      />
      <TextField
        className={style.input}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        label="Новый пароль"
        type="password"
        variant="outlined"
      />
      <Button variant="contained" onClick={onSave}>
        Сохранить
      </Button>
    </div>
  );
}

export default EditPassword;
