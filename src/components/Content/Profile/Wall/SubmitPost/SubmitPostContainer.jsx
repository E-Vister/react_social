import React from "react";
import {addPostCreator, updatePostFieldCreator} from "../../../../../redux/profile-reducer";
import SubmitPost from "./SubmitPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostTextField: state.profile.newPostTextField
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: () => {
          dispatch(addPostCreator());
      },
      onPostChange: (text) => {
          dispatch(updatePostFieldCreator(text));
      }
  }
};


const SubmitPostContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitPost);

export default SubmitPostContainer;