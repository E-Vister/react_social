import scss from './Wall.module.scss';
import Post from "./Post/Post";
import SubmitPostContainer from "./SubmitPost/SubmitPostContainer";

const Wall = (props) => {
    let postsElements = props.posts.map((item) => <Post id={item.id}
                                                        author={item.author}
                                                        message={item.message}
                                                        likesCount={item.likeCount}/>);

    return (
        <div className={scss.wall}>
            Feed
            <SubmitPostContainer newPostTextField={props.newPostTextField} dispatch={props.dispatch}/>
            <div className={scss.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Wall;