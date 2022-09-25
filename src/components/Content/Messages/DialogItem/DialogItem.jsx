import scss from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <div className={scss.container}>
            <NavLink to={path}>
                <img className={scss.avatar} src={props.avatar} alt="avatar"/>
                {props.username}
            </NavLink>
        </div>
    );
}

export default DialogItem;