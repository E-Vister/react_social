import scss from './SubmitPost.module.scss';
import React from "react";

const SubmitPost = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={scss.submit_post}>
            <div>
                <textarea name="new_post_content" id="new_post_content" cols="50" rows="5" ref={newPostElement} />
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    );
}

export default SubmitPost;