import scss from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={scss.item}>
            <img
                className={scss.avatar}
                src="https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg"
                alt="post_avatar"/>
            <span className={scss.nickname}>{props.nickname}</span>
            <span className={scss.message}>{props.message}</span>
            <div className={scss.likes}><span>{props.likesCount} {(props.likesCount == 1) ? `Like` : `Likes`}</span></div>
        </div>
    );
}

export default Post;