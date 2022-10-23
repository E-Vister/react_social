import scss from './PostForm.module.scss';
import React from "react";
import {useForm} from "react-hook-form";


const PostForm = (props) => {
    const onSubmit = (data) => {
        props.addPost(data.postContent);
    }

    const {register, handleSubmit} = useForm();

    return (
        <div className={scss.field}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <textarea
                    {...register('postContent')}
                    placeholder={"What's new?"}
                    cols="50"
                    rows="5"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>

        </div>
    );
}

export default PostForm;