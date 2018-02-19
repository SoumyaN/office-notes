import { actionEnums } from '../../../common/actionEnums';
import { LoginModel } from '../../../model/LoginModel';
import axios from 'axios';

const CLIENT_ROOT_URL = 'http://localhost:3000/#/';

export const submitLogin = (login: LoginModel) => {
    return (dispatch ) => {
        dispatch({
            type: actionEnums.SUBMIT_LOGIN_REQUEST
        });
        axios.post('/login', { userName: login.userName, password: login.password })
            .then(response => {
                dispatch({ type: actionEnums.SUBMIT_LOGIN_SUCCEED });
            })
            .catch((error) => {
                dispatch({ type: actionEnums.SUBMIT_LOGIN_FAILURE });
                window.location.href = CLIENT_ROOT_URL + 'home';
            });
    };
};