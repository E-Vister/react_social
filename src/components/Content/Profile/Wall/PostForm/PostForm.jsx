import scss from './PostForm.module.scss';
import React from "react";
import {useForm} from "react-hook-form";
import {validators} from "../../../../../utils/validators";


const PostForm = (props) => {
    const onSubmit = (data) => {
        props.addPost(data.postContent, props.profileId);
        reset();
    }

    const {register, handleSubmit, reset} = useForm();

    const registerOptions = validators({
        required: true
    })

    return (
        <div className={scss.field}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register('postContent', registerOptions)}
                    placeholder={"What's new?"}
                    cols="50"
                    rows="5"/>

                <button><i className={scss.arrow_right}/></button>
            </form>

        </div>
    );
}

export default PostForm;