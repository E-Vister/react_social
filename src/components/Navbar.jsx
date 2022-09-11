import scss from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={scss.navbar}>
            <div className={scss.item}><a href='#'>Profile</a></div>
            <div className={scss.item}><a href='#'>Messages</a></div>
            <div className={scss.item}><a href='#'>News</a></div>
            <div className={scss.item}><a href='#'>Music</a></div>
            <br/>
            <div className={scss.item}><a href='#'>Settings</a></div>
        </nav>
    );
}

export default Navbar;