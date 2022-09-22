import React from "react";
import {addPostCreator, updatePostFieldCreator} from "../../../../../redux/profile-reducer";
import SubmitPost from "./SubmitPost";


const SubmitPostContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostCreator());
    }

    const onPostChange = (text) => {
        props.dispatch(updatePostFieldCreator(text));
    }

    return (<SubmitPost addPost={addPost} onPostChange={onPostChange} newPostTextField={props.newPostTextField}/>);
}

export default SubmitPostContainer;