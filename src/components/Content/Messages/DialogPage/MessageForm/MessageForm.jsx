import scss from './MessageForm.module.scss';
import React from "react";
import {useForm} from "react-hook-form";
import {validators} from "../../../../../utils/validators";

const MessageForm = (props) => {
    const onSubmit = (data) => {
        props.sendMessage(props.dialogId, data.message);
        reset();
    }

    const {register, handleSubmit, reset} = useForm();

    const registerOptions = validators({
        required: true
    })

    return (
        <div className={scss.field}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <textarea {...register('message', registerOptions)}
                          placeholder={'Enter your message...'}
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

export default MessageForm;