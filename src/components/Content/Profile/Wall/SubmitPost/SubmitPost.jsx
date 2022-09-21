import scss from './SubmitPost.module.scss';
import React from "react";
import {addPostCreator, updatePostFieldCreator} from "../../../../../redux/profile-reducer";


const SubmitPost = (props) => {
    const addPost = () => {
        props.dispatch(addPostCreator());
    }

    const onPostChange = (event) => {
        props.dispatch(updatePostFieldCreator(event.target.value));
    }

    return (
        <div className={scss.submit_post}>
            <div>
                <textarea onChange={onPostChange}
                          name="new_post_content"
                          id="new_post_content"
                          cols="50"
                          rows="5"
                          value={props.newPostTextField}/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    );
}

export default SubmitPost;