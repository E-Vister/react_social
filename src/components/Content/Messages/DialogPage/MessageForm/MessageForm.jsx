import scss from './MessageForm.module.scss';
import React from "react";
import {useForm} from "react-hook-form";

const MessageForm = (props) => {
    const onSubmit = (data) => {
        props.sendMessage(props.dialogId, data.message);
    }

    const {register, handleSubmit} = useForm();

    return (
        <div className={scss.field}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <textarea {...register('message')}
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