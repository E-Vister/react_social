import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "../../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId || this.props.authorizedUserId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile posts={this.props.posts}
                        profileInfo={this.props.profileInfo}
                        isFetching={this.props.isFetching}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        profileInfo: state.profile.profileInfo,
        isFetching: state.profile.isFetching,
        status: state.profile.profileInfo.status,
        authorizedUserId: state.auth.userId,
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);