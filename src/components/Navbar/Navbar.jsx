import scss from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={scss.navbar}>
            <div className={scss.item}>
                <NavLink to="/profile"
                         className={isActive()}>Profile</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/messages'
                         className={isActive()}>Messages</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/news'
                         className={isActive()}>News</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/music'
                         className={isActive()}>Music</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/settings'
                         className={isActive()}>Settings</NavLink>
            </div>
        </nav>
    );
}

const isActive = () => {
    return navData => navData.isActive ? scss.active : scss.item;
}

export default Navbar;