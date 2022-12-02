import scss from './Message.module.scss';

const Message = (props) => {
    const messageStylesConfiguration = () => {
        return `${isOwnMessage()} ${removeTail()}`
    }
    const isOwnMessage = () => {
        return (props.authorId === props.userId) ? scss.from_me : scss.from_them;
    }

    const removeTail = () => {
        return (props.noTail) ? scss.no_tail : ''
    }

    return (
        <p className={messageStylesConfiguration()}>{props.messageText}</p>
    );
}

export default Message;