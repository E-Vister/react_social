import scss from "./ProfileInfo.module.scss";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div className={scss.profile_info}>
            <div className={scss.banner}>
                <img
                    src={props.profileInfo.banner}
                    alt="banner"/>
            </div>
            <div>
                <img
                    className={scss.avatar}
                    src={props.profileInfo.avatar}
                    alt="avatar"/>
                <div className={`${scss.info_wrapper}`}>
                    {props.profileInfo.fullname}
                </div>
                <div className={`${scss.info_wrapper} ${scss.status}`}>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}
                                   profileUserId={props.profileUserId}
                                   sessionUserId={props.sessionUserId}
                    />
                </div>
                <div className={`${scss.info_wrapper} ${scss.location}`}>
                    {`${props.profileInfo.location.city}, ${props.profileInfo.location.country}`}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;