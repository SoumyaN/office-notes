import { connect } from 'react-redux';
import { LoginComponent } from './components/login';
import { submitLogin } from './actions/login.actions';
import { LoginModel } from '../../model/LoginModel';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (loginModel: LoginModel) => dispatch(submitLogin(loginModel))

    };
};

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginComponent);