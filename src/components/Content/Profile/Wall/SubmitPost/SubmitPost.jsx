import scss from './SubmitPost.module.scss';
import React from "react";
import {addPostActionCreator, updatePostFieldActionCreator} from "../../../../../redux/state";



const SubmitPost = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        props.dispatch(updatePostFieldActionCreator(newPostElement.current.value));
    }

    return (
        <div className={scss.submit_post}>
            <div>
                <textarea onChange={onPostChange}
                          name="new_post_content"
                          id="new_post_content"
                          cols="50"
                          rows="5"
                          ref={newPostElement}
                          value={props.newPostTextField}/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    );
}

export default SubmitPost;