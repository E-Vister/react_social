import scss from './Messages.module.scss';
import {Navigate, Route, Routes} from "react-router-dom";

const Messages = (props) => {
    if (!props.isAuth)  return <Navigate to={'/login'}/>

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