import scss from './Wall.module.scss';
import Post from "./Post/Post";

const Wall = (props) => {
    let postsElements = props.posts.map((item) => <Post id={item.id}
                                                        author={item.author}
                                                        message={item.message}
                                                        likesCount={item.likeCount}/>);

    return (
        <div className={scss.wall}>
            Feed
            <div className={scss.new_post}>New Post</div>
            <div className={scss.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Wall;