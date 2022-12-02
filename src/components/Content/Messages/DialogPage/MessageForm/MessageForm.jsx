import scss from './MessageForm.module.scss';
import React from "react";
import {useForm} from "react-hook-form";
import {validators} from "../../../../../utils/validators";

const MessageForm = (props) => {
    const onSubmit = (data) => {
        props.addMessage(data.message, props.dialogId);
        reset();
    }

    const {register, handleSubmit, reset} = useForm();

    const registerOptions = validators({
        required: true
    })

    return (
        <div className={scss.field}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register('message', registerOptions)}
                          placeholder={'Enter your message...'}
                          cols="50"
                          rows="5"/>
                <button><i className={scss.arrow_right}/></button>
            </form>

        </div>
    );
}

export default MessageForm;