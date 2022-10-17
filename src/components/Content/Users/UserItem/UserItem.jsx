import scss from './UserItem.module.scss';
import {NavLink} from "react-router-dom";
import {deleteFollow, postFollow} from "../../../../api/api";

const UserItem = (props) => {
    const unfollow = () => {
        props.toggleFollowingProgress(true, props.user.id);
        deleteFollow(props.user.id).then(data => {
            if (data.resultCode === 0) {
                props.unfollow(props.user.id);
            }
            props.toggleFollowingProgress(false, props.user.id);
        });
    }

    const follow = () => {
        props.toggleFollowingProgress(true, props.user.id);
        postFollow(props.user.id).then(data => {
            if (data.resultCode === 0) {
                props.follow(props.user.id);
            }
            props.toggleFollowingProgress(false, props.user.id);
        });
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
                        {(props.user.isFollowed)
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={unfollow}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={follow}>Follow</button>
                        }
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