import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhone, updatePhone } from "../../../redux/slices/settings";
import { TextField, Button, Typography } from "@mui/material";
import style from "./style.module.css";

function EditPhone() {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.settings.phone);
  const [value, setValue] = useState(phone);

  useEffect(() => {
    dispatch(fetchPhone());
  }, [dispatch]);

  useEffect(() => {
    setValue(phone);
  }, [phone]);

  const onSave = () => {
    dispatch(updatePhone(value));
  };

  return (
    <div className={style.container}>
      <Typography
        sx={{
          fontFamily: "SourceCodePro-SemiBold",
          fontSize: "24px",
          textAlign: "left",
          // marginTop: "27px",
          // marginBottom: "20px",
          lineHeight: '24px'
        }}
      >
        Изменить номер телефона
      </Typography>
      <TextField
        className={style.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Телефон"
        variant="outlined"
      />
      <Button variant="contained" onClick={onSave}>
        Сохранить
      </Button>
    </div>
  );
}

export default EditPhone;
