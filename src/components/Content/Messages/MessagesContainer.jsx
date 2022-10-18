import DialogItem from "./DialogItem/DialogItem";
import DialogPage from "./DialogPage/DialogPage";
import {Route} from "react-router-dom";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogs.dialogsArray.map((item) => {
            return <DialogItem
                username={`${item.author.name} ${item.author.surname}`}
                avatar={item.author.avatar}
                key={item.id}
                id={item.id}/>
        }),
        dialogsPage: state.dialogs.dialogsArray.map((item) => {
            return <Route path={`/${item.id}/`}
                          element={<DialogPage
                              dialogId={item.id}
                              messages={item.messages}
                              key={item.id}
                              newMessageTextField={state.dialogs.newMessageTextField}/>}/>
        }),
        isAuth: state.auth.isAuth
    }
};

const MessagesContainer = connect(mapStateToProps, null)(Messages);

export default MessagesContainer;