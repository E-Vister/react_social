import scss from './LastFriendsItem.module.scss'

const LastFriendsItem = (props) => {
    let name = (props.name.length > 6) ? `${props.name.slice(0,6)}...` : props.name;

    return (
        <figure className={scss.last_friends_item}>
            <p><img src={props.avatar} alt="avatar"/></p>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default LastFriendsItem;
