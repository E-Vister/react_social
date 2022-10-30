import scss from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const onClick = () => {
        props.logout();
        window.location.reload();
    }

    return (
        <header className={scss.container}>
            <div className={scss.logo}>
                <NavLink to={'/profile'}>
                    <img
                        src="https://i.imgur.com/3nJCfA3.png"
                        alt="logo"/>
                </NavLink>
            </div>

            <div className={scss.login}>
                {props.isAuth
                    ? <div onClick={onClick}>{props.name}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;