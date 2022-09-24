import scss from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import WallContainer from "./Wall/WallContainer";

const Profile = (props) => {
    return (
        <div className={scss.profile}>
            <ProfileInfo/>
            <WallContainer/>
        </div>
    );
}

export default Profile;