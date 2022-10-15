import scss from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wall from "./Wall/Wall";

const Profile = (props) => {
    return (
        <div className={scss.profile}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <Wall posts={props.posts}/>
        </div>
    );
}

export default Profile;