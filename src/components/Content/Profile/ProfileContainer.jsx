import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "../../../hoc/withRouter";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    userId = this.props.router.params.userId || this.props.authorizedUserId;

    componentDidMount() {
        if (this.userId !== undefined) {
            this.props.getProfile(this.userId);
        }
    }

    render() {
        if (!this.props.router.params.userId && !this.props.isAuth) return <Navigate to={'/login'}/>

        return <Profile posts={this.props.posts}
                        profileInfo={this.props.profileInfo}
                        isFetching={this.props.isFetching}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.router.params.userId !== this.props.router.params.userId) {
            this.props.getProfile(this.props.authorizedUserId);
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        profileInfo: state.profile.profileInfo,
        isFetching: state.profile.isFetching,
        status: state.profile.profileInfo.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);