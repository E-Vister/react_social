import scss from './Content.module.scss';
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import News from "./News/News";
import UsersContainer from "./Users/UsersContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Content = (props) => {
    return (
        <div className={scss.container}>
            <Routes>
                <Route path={'/*'}
                       element={<Profile/>}/>
                <Route path={'/profile/'}
                       element={<Profile/>}/>
                <Route path={'/messages/*'}
                       element={<MessagesContainer/>}/>
                <Route path={'/users/'}
                       element={<UsersContainer/>}/>
                <Route path={'/news/'}
                       element={<News/>}/>
                <Route path={'/music/'}
                       element={<Music/>}/>
                <Route path={'/settings/'}
                       element={<Settings/>}/>
            </Routes>

        </div>
    );
}

export default Content;