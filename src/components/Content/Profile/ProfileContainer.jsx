import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../api/api";
import {setPosts, setProfileInfo, switchIsFetchingStatus} from "../../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.props.switchIsFetchingStatus(true);
        let userId = this.props.router.params.userId;

        getProfile(userId).then(data => {
            this.props.switchIsFetchingStatus(false);
            this.props.setPosts(data.posts);
            this.props.setProfileInfo(data.items);
        })
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
    setPosts,
    setProfileInfo,
    switchIsFetchingStatus,
})(withRouter(ProfileAPIContainer));

export default ProfileContainer;