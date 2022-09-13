import scss from './Content.module.scss';
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import News from "./News/News";
import {Route, Routes} from "react-router-dom";

const Content = () => {
    return (
        <div className={scss.content}>
            <Routes>
                <Route path={'profile'} element={<Profile />} />
                <Route path={'messages'} element={<Messages />} />
                <Route path={'news'} element={<News />} />
                <Route path={'music'} element={<Music />} />
                <Route path={'settings'} element={<Settings />} />
            </Routes>

        </div>
    );
}

export default Content;