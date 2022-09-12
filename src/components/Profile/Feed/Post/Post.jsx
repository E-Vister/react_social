import scss from './Post.module.scss';

const Post = () => {
    return (
        <div className={scss.item}>
            <img
                src="https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg"
                alt="author_avatar"/>
            post
            <div><span>Like</span></div>
        </div>
    );
}

export default Post;