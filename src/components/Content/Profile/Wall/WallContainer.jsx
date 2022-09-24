import Post from "./Post/Post";
import Wall from "./Wall";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsElements: state.profile.posts.map((item) => {
            return <Post id={item.id}
                  author={item.author}
                  message={item.message}
                  likesCount={item.likeCount}/>
        }),
        newPostTextField: state.profile.newPostTextField
    }

}

const WallContainer = connect(mapStateToProps, null)(Wall);

export default WallContainer;