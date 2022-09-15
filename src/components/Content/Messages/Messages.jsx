import scss from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
    let dialogsElements = props.dialogs.map((item) => <DialogItem username={item.name} id={item.id}/>);

    return (
        <div className={scss.messages}>
            {dialogsElements}
        </div>
    );
}

export default Messages;