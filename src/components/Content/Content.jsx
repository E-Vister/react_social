import scss from './Content.module.scss';
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import News from "./News/News";
import {Route, Routes} from "react-router-dom";

const Content = (props) => {
    return (
        <div className={scss.content}>
            <Routes>
                <Route path={''}
                       element={<Profile profile={props.state.profile} addPost={props.addPost}
                                         updatePostField={props.updatePostField}/>}/>
                <Route path={'profile'}
                       element={<Profile profile={props.state.profile} addPost={props.addPost}
                                         updatePostField={props.updatePostField}/>}/>
                <Route path={'messages'} element={<Messages dialogs={props.state.dialogs}/>}/>
                <Route path={'news'} element={<News/>}/>
                <Route path={'music'} element={<Music/>}/>
                <Route path={'settings'} element={<Settings/>}/>
            </Routes>

        </div>
    );
}

export default Content;