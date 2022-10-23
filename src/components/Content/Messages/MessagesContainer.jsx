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
                              key={item.id}/>}/>
        }),
    }
};

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(Messages);