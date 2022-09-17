import scss from './LastFriendsItem.module.scss'

const LastFriendsItem = (props) => {
    return (
        <div className={scss.last_friends_item}>
            <img src={props.avatar} alt="avatar"/>
            {props.name}
        </div>
    );
}

export default LastFriendsItem;
