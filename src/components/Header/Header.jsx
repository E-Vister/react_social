import scss from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={scss.container}>
            <img
                className={scss.logo}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="logo"/>
            <div className={scss.login}>
                {props.isAuth ? props.name : 'Login'}
            </div>
        </header>
    );
}

export default Header;