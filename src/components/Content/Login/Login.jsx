import scss from './Login.module.scss';
import {Navigate} from "react-router-dom";

const Login = (props) => {
    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div className={scss.container}>
            Login
        </div>
    );
}

export default Login;