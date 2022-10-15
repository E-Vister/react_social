import scss from './SubmitPost.module.scss';
import React from "react";


const SubmitPost = (props) => {
    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        props.updatePostField(event.target.value);
    }

    return (
        <div className={scss.field}>
            <div>
                <textarea onChange={onPostChange}
                          name="new_post_content"
                          id="new_post_content"
                          cols="50"
                          rows="5"
                          value={props.newPostTextField}/>
            </div>
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>
        </div>
    );
}

export default SubmitPost;