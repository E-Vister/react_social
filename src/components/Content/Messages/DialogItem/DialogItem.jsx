import scss from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <NavLink className={scss.container} to={path}>
            <div className={scss.wrapper}>
                <div className={scss.avatar}>
                    <img className={scss.avatar_image} src={props.avatar} alt="avatar"/>
                </div>
                <div className={scss.title}>
                    <div className={scss.username}>{props.username}</div>
                    <div className={scss.last_message}>
                        {(props.lastMessageAvatar) ? <img className={scss.avatar_image}
                             src={props.lastMessageAvatar}
                             alt="last_message_avatar"
                        /> : ''}
                        {props.lastMessage}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;