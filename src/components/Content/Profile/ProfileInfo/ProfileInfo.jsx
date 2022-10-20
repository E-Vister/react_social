import scss from "./ProfileInfo.module.scss";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div className={scss.profile_info}>
            <div className={scss.img_wrapper}>
                <div className={scss.banner}>
                    <img
                        src={props.profileInfo.banner}
                        alt="banner"/>
                </div>
                <img
                    className={scss.avatar}
                    src={props.profileInfo.avatar}
                    alt="avatar"/>
            </div>
            <div className={`${scss.wrapper} ${scss.fullname}`}>
                {props.profileInfo.fullname}
            </div>
            <div className={`${scss.wrapper} ${scss.status}`}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={`${scss.wrapper} ${scss.location}`}>
                {`${props.profileInfo.location.city}, ${props.profileInfo.location.country}`}
            </div>
        </div>
    );
}

export default ProfileInfo;