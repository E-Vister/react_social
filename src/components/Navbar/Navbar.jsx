import scss from './Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={scss.navbar}>
            <div className={scss.item}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={scss.item}>
                <Link to='/messages'>Messages</Link>
            </div>
            <div className={scss.item}>
                <Link to='/news'>News</Link>
            </div>
            <div className={scss.item}>
                <Link to='/music'>Music</Link>
            </div>
            <br/>
            <div className={scss.item}>
                <Link to='/settings'>Settings</Link>
            </div>
        </nav>
    );
}

export default Navbar;