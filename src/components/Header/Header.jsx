import scss from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const onClick = () => {
        props.logout();
        window.location.reload();
    }

    return (
        <header className={scss.container}>
            <img
                className={scss.logo}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="logo"/>
            <div className={scss.login}>
                {props.isAuth
                    ? <div onClick={onClick}>{props.name}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;