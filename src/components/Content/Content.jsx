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
                <Route path={''} element={<Profile posts={props.posts}/>} />
                <Route path={'profile'} element={<Profile posts={props.posts}/>} />
                <Route path={'messages'} element={<Messages dialogs={props.dialogs}/>} />
                <Route path={'news'} element={<News />} />
                <Route path={'music'} element={<Music />} />
                <Route path={'settings'} element={<Settings />} />
            </Routes>

        </div>
    );
}

export default Content;