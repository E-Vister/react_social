import scss from './Wall.module.scss';
import Post from "./Post/Post";
import SubmitPost from "./SubmitPost/SubmitPost";

const Wall = (props) => {
    let postsElements = props.posts.map((item) => <Post id={item.id}
                                                        author={item.author}
                                                        message={item.message}
                                                        likesCount={item.likeCount}/>);

    return (
        <div className={scss.wall}>
            Feed
            <SubmitPost addPost={props.addPost}/>
            <div className={scss.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Wall;