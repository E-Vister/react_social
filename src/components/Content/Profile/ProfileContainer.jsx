import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profile-reducer";
import {withRouter} from "../../../hoc/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
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

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);