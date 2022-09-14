import scss from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={scss.navbar}>
            <div className={scss.item}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? scss.active : scss.item}>Profile</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/messages'
                         className={navData => navData.isActive ? scss.active : scss.item}>Messages</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/news'
                         className={navData => navData.isActive ? scss.active : scss.item}>News</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/music'
                         className={navData => navData.isActive ? scss.active : scss.item}>Music</NavLink>
            </div>
            <div className={scss.item}>
                <NavLink to='/settings'
                         className={navData => navData.isActive ? scss.active : scss.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;