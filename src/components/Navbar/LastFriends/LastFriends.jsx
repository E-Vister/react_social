import scss from './LastFriends.module.scss'

const LastFriends = (props) => {
    return (
        <div className={scss.last_friends}>
            {props.friendsItems}
        </div>
    );
}

export default LastFriends;
