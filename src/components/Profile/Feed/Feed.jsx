import scss from './Feed.module.scss';
import Post from "./Post/Post";

const Feed = () => {
    return (
        <div className={scss.feed}>
            Feed
            <div className={scss.new_post}>New Post</div>
            <div className={scss.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Feed;