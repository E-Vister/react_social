import scss from './LastFriends.module.scss'
import LastFriendsItem from "./LastFriendsItem/LastFriendsItem";

const LastFriends = (props) => {
    let friendsItems = props.friends.map(item => <LastFriendsItem name={item.name} avatar={item.avatar}/>);

    return (
        <div className={scss.last_friends}>
            {friendsItems}
        </div>
    );
}

export default LastFriends;
