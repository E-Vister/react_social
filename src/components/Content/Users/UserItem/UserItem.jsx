import scss from './UserItem.module.scss';
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    const unfollow = () => {
        props.unfollow(props.user.id);
    }

    const follow = () => {
        props.follow(props.user.id);
    }

    return (
        <div className={scss.content}>
            <div className={scss.wrapper}>
                <div className={scss.avatar}>
                    <NavLink to={`/profile/${props.user.id}`}><img src={props.user.avatar}
                                                                    alt="user_avatar"/></NavLink>
                </div>
                <div className={scss.controls}>
                    <p>
                        {(props.user.isFollowed) ? <button onClick={unfollow}>Unfollow</button> :
                            <button onClick={follow}>Follow</button>}
                    </p>
                </div>
            </div>
            <div className={scss.info}>
                <div className={scss.name}>{`${props.user.name} ${props.user.surname}`}</div>
                <div className={scss.status}>{props.user.status}</div>
            </div>
            <div className={scss.location}>
                <div>{props.cityRenderer(props.user.location)}</div>
                <div>{props.user.location.country}</div>
            </div>
        </div>
    );
}

export default UserItem;