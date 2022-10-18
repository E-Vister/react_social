import scss from './Content.module.scss';
import {Route, Routes} from "react-router-dom";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import News from "./News/News";
import UsersContainer from "./Users/UsersContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Login/LoginContainer";

const Content = (props) => {
    return (
        <div className={scss.container}>
            <Routes>
                <Route path={'/*'}
                       element={<UsersContainer/>}/>
                <Route path={'/profile/'}
                       element={<ProfileContainer/>}/>
                <Route path={'/profile/:userId'}
                       element={<ProfileContainer/>}/>
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
                <Route path={'/login/'}
                       element={<LoginContainer/>}/>
            </Routes>

        </div>
    );
}

export default Content;