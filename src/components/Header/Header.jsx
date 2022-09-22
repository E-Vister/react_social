import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.container}>
            <img
                className={scss.logo}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="logo"/>
        </header>
    );
}

export default Header;