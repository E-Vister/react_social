import scss from './Profile.module.scss';
import Wall from "./Wall/Wall";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={scss.profile}>
            <ProfileInfo />
            <Wall />
        </div>
    );
}

export default Profile;