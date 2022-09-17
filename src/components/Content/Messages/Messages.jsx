import scss from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
    let dialogsElements = props.dialogs.map((item) => <DialogItem
        username={`${item.author.name} ${item.author.surname}`}
        avatar={item.author.avatar}
        id={item.id}/>);

    return (
        <div className={scss.messages}>
            {dialogsElements}
        </div>
    );
}

export default Messages;