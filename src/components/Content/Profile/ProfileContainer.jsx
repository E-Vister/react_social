import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setPosts, setProfileInfo, switchIsFetchingStatus} from "../../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        return <Profile posts={this.props.posts}
                        newPostTextField={this.props.newPostTextField}
                        profileInfo={this.props.profileInfo}
                        isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostTextField: state.profile.newPostTextField,
        profileInfo: state.profile.profileInfo,
        isFetching: state.profile.isFetching,
    }
}

const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

const ProfileContainer = connect(mapStateToProps, {
    getProfile,
})(withRouter(ProfileAPIContainer));

export default ProfileContainer;