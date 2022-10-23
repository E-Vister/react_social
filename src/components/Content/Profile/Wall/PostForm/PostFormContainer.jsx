import PostForm from "./PostForm";
import {connect} from "react-redux";
import {addPost} from "../../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {
    addPost,
})(PostForm);