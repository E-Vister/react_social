import scss from './Messages.module.scss';
import {Route, Routes} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={scss.messages}>
            <Routes>
                <Route path={'/'} element={props.dialogsElements}/>
                {props.dialogsPage}
            </Routes>
        </div>
    );
}

export default Messages;