import scss from "./ProfileInfo.module.scss";

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
            <div className={`${scss.wrapper} ${scss.fullname}`}>{props.profileInfo.fullname}</div>
            <div className={`${scss.wrapper} ${scss.status}`}>{props.profileInfo.status}</div>
        </div>
    );
}

export default ProfileInfo;