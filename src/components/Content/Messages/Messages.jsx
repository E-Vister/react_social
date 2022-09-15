import scss from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
    return (
      <div className={scss.messages}>
          <DialogItem username={`John Garner`} id={`1`}/>
          <DialogItem username={`Jane Heaton`} id={`2`}/>
          <DialogItem username={`Alex Drake`} id={`3`}/>
          <DialogItem username={`Jakub Mathis`} id={`4`}/>
          <DialogItem username={`Elisabeth Plummer`} id={`5`}/>
      </div>
    );
}

export default Messages;