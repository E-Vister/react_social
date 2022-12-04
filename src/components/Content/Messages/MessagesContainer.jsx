import DialogItem from "./DialogItem/DialogItem";
import DialogPage from "./DialogPage/DialogPage";
import {Route} from "react-router-dom";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogs.dialogsArray.map((item) => {
            const [interlocutorData] = item.members.filter(i => i.id !== state.auth.userId);
            const [currentUserData] = item.members.filter(i => i.id === state.auth.userId);

            const [lastMessageObject] = item.messages.slice(-1);

            const lastMessageContent = lastMessageObject.content;
            const lastMessageAvatar = (lastMessageObject.authorId === state.auth.userId)
                ? currentUserData.avatar
                : false;

            return <DialogItem
                username={`${interlocutorData.name} ${interlocutorData.surname}`}
                avatar={interlocutorData.avatar}
                key={interlocutorData.id}
                id={item.dialogId}
                lastMessage={lastMessageContent}
                lastMessageAvatar={lastMessageAvatar}
            />
        }),
        dialogsPage: state.dialogs.dialogsArray.map((item) => {
            const [{avatar, name, surname, id}] = item.members.filter(i => i.id !== state.auth.userId);

            return <Route path={`/${item.dialogId}/`}
                          key={item.dialogId}
                          element={<DialogPage
                              username={`${name} ${surname}`}
                              avatar={avatar}
                              interlocutorId={id}
                              dialogId={item.dialogId}
                              userId={state.auth.userId}
                              messages={item.messages}
                              key={item.dialogId}/>}/>
        }),
    }
};

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(Messages);