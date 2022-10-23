import scss from './Wall.module.scss';
import PostFormContainer from "./PostForm/PostFormContainer";
import Post from "./Post/Post";

const Wall = (props) => {
    let postsElements;

    if (props.posts) {
        postsElements = props.posts.map((item) => {
            return <Post id={item.id}
                         author={item.author}
                         message={item.message}
                         key={item.id}
                         likesCount={item.likeCount}/>
        });
    }

    return (
        <div className={scss.wall}>
            Feed
            <PostFormContainer/>
            <div className={scss.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Wall;