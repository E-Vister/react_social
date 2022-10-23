import scss from './Login.module.scss';
import {Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = (props) => {
    if (props.isAuth) return <Navigate to={'/profile'}/>

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={scss.container}>
            Login
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm = (props) => {
    const {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <input {...register('login')} placeholder={'Login'} type="text"/>
                <button>Send</button>
            </form>
        </div>
    );

}

export default Login;