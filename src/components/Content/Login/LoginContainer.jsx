import Login from "./Login";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

const LoginContainer = connect(mapStateToProps, {})(Login);

export default LoginContainer;