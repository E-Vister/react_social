import scss from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wall from "./Wall/Wall";
import Preloader from "../../common/Preloader";

const Profile = (props) => {
    let profileElements =
        <div>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
            <Wall posts={props.posts}/>
        </div>

    return (
        <div className={scss.profile}>
            {props.isFetching ? <Preloader/> : profileElements}
        </div>
    );
}

export default Profile;