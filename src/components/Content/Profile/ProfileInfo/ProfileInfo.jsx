import scss from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return (
        <div className={scss.profile_info}>
            <div className={scss.banner}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="banner"/>
            </div>
            <img
                src="https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8"
                alt="avatar"/>
            description
        </div>
    );
}

export default ProfileInfo;