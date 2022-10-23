import scss from './Login.module.scss';
import {Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {validators} from "../../../utils/validators";

const Login = (props) => {
    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div className={scss.container}>
            <div className={scss.logo}>Login</div>
            <LoginForm/>
        </div>
    );
}

const LoginForm = (props) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            login: ''
        },
        mode: "onChange"
    });

    const onSubmit = (data) => {
        reset();
    }

    const registerOptions = validators({
        required: true,
        minLength: 6,
        maxLength: 15
    })

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('login', registerOptions)}
                       placeholder={'Login'}
                       type="text"
                       className={errors?.login ? scss.input_error : ""}/>
                {errors?.login && <div className={scss.errors}>{errors.login.message}</div>}
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );

}

export default Login;