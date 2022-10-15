import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setPosts, setProfileInfo} from "../../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import {switchIsFetchingStatus} from "../../../redux/users-reducer";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        let url = `http://localhost:5000/api/1.0/profile/${userId ? userId : 0}`;

        this.props.switchIsFetchingStatus(true);

        axios.get(url).then(res => {
            this.props.switchIsFetchingStatus(false);
            this.props.setPosts(res.data.posts);
            this.props.setProfileInfo(res.data.items);
        })
    }

    render() {
        return <Profile posts={this.props.posts} newPostTextField={this.props.newPostTextField}
                        profileInfo={this.props.profileInfo}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostTextField: state.profile.newPostTextField,
        profileInfo: state.profile.profileInfo,
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
                router={{ location, navigate, params }}
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