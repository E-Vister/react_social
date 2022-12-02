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
                <div className={scss.likesCount}>{props.likesCount} </div>
                <div className={scss.likesIcon}><img src="/heart.svg" alt="like_icon" width={"20px"}/></div>
            </div>
        </div>
    );
}

export default Post;