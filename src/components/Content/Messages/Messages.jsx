import scss from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import DialogPage from "./DialogPage/DialogPage";
import {Route, Routes} from "react-router-dom";

const Messages = (props) => {
    let dialogsElements = props.dialogs.dialogsArray.map((item) => <DialogItem
        username={`${item.author.name} ${item.author.surname}`}
        avatar={item.author.avatar}
        id={item.id}/>);

    let dialogsPage = props.dialogs.dialogsArray.map((item) => <Route path={`/${item.id}/`}
                                                                      element={<DialogPage
                                                                          id={item.id}
                                                                          messages={item.messages}
                                                                          newMessageTextField={props.dialogs.newMessageTextField}
                                                                          dispatch={props.dispatch}/>}/>);

    return (
        <div className={scss.messages}>
            <Routes>
                <Route path={'/'} element={dialogsElements}/>
                {dialogsPage}
            </Routes>
        </div>
    );
}

export default Messages;