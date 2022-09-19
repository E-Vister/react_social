import scss from './SubmitPost.module.scss';
import React from "react";

const SubmitPost = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        let addPost = {
            type: 'ADD-POST'
        }

        props.dispatch(addPost);
    }

    const onPostChange = () => {
        let updatePostField = {
            type: 'UPDATE-POST-FIELD',
            text: newPostElement.current.value
        }

        props.dispatch(updatePostField);
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