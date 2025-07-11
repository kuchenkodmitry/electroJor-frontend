import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios"

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe' ,  async () => {
    const {data} = await axios.get('/me')
    return data
})

export const fetchAuth = createAsyncThunk('auth/fetchAuth' ,  async (params) => {
    const {data} = await axios.post('/login', params)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister' ,  async (params) => {
    const {data} = await axios.post('/register', params)
    return data
})

export const changePassword = createAsyncThunk('auth/changePassword', async (params) => {
    const { data } = await axios.put('/password', params)
    return data
})


const initialState = {
    data: null,
    status: "loading"
}

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        logout: (state) => {
            state.data = null //Стираем данные юзера (функция для выхода)
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        });

        builder.addCase(
            fetchAuth.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.status = 'loaded';
                state.data = action.payload;
            }
        );

        builder.addCase(fetchAuth.rejected, (state) => { // rejected - если ошибка
            state.status = 'error';
            state.data = null;
        });

        builder.addCase(fetchAuthMe.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        });

        builder.addCase(
            fetchAuthMe.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.status = 'loaded';
                state.data = action.payload;
            }
        );

        builder.addCase(fetchAuthMe.rejected, (state) => { // rejected - если ошибка
            state.status = 'error';
            state.data = null;
        });

        builder.addCase(fetchRegister.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        });

        builder.addCase(
            fetchRegister.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.status = 'loaded';
                state.data = action.payload;
            }
        );

        builder.addCase(fetchRegister.rejected, (state) => { // rejected - если ошибка
            state.status = 'error';
            state.data = null;
        });

        builder.addCase(changePassword.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(changePassword.fulfilled, (state) => {
            state.status = 'loaded';
        });

        builder.addCase(changePassword.rejected, (state) => {
            state.status = 'error';
        });
    }
})

export const selectIsAuth = state => Boolean(state.auth.data)
export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions // вытаскиваем действие (Удалить данные пользователя/ выйти из аккаунта)

