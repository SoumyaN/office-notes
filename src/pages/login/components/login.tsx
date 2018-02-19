import * as React from 'react';
import { LoginModel } from '../../../model/LoginModel';

interface Props {
    submitLogin: (login: LoginModel) => void;
}

export const LoginComponent = (props: Props) => {
    return (
        <div>
            <div>Username: <input type="text" /></div>
            <div>Password: <input type="text" /></div>
            <div><button onClick={() => props.submitLogin({userName : 'fName', password : 'opass'})}>Submit
            </button></div>
        </div>
    );
};