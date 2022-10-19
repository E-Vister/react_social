import SubmitPost from "./SubmitPost";
import {connect} from "react-redux";
import {addPost, updatePostField} from "../../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        newPostTextField: state.profile.newPostTextField
    }
};

export default connect(mapStateToProps, {
    addPost,
    updatePostField,
})(SubmitPost);