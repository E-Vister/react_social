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

            return <DialogItem
                username={`${interlocutorData.name} ${interlocutorData.surname}`}
                avatar={interlocutorData.avatar}
                key={interlocutorData.id}
                id={item.dialogId}/>
        }),
        dialogsPage: state.dialogs.dialogsArray.map((item) => {
            return <Route path={`/${item.dialogId}/`}
                          key={item.dialogId}
                          element={<DialogPage
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