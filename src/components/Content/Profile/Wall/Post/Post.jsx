import scss from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={scss.item}>
            <img
                className={scss.avatar}
                src={props.author.avatar}
                alt="post_avatar"/>
            <span className={scss.fullname}>{`${props.author.name} ${props.author.surname}`}</span>
            <span className={scss.message}>{props.message}</span>
            <div className={scss.likes}>
                <span className={scss.likesCount}>{props.likesCount} </span>
                <span className={scss.likesText}>{(props.likesCount === 1) ? `Like` : `Likes`}</span>
            </div>
        </div>
    );
}

export default Post;