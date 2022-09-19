import scss from './Profile.module.scss';
import Wall from "./Wall/Wall";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={scss.profile}>
            <ProfileInfo/>
            <Wall posts={props.profile.posts} newPostTextField={props.profile.newPostTextField} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;