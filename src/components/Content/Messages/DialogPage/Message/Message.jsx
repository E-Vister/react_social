import scss from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={scss.item}>
            <span className={scss.message}>{props.messageText}</span>
        </div>
    );
}

export default Message;