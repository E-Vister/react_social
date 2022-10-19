import {connect} from "react-redux";
import Users from "./Users";
import React from 'react';
import {follow, getUsers, setCurrentPage, unfollow} from "../../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber);
    }

    render() {
        return <Users onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      usersArray={this.props.usersArray}
                      cityRenderer={this.props.cityRenderer}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}/>
    }
}

let mapStateToProps = (state) => {
    let cityRenderer = (location) => {
        return (location.state) ? `${location.city}, ${location.state}` : `${location.city}`
    }

    return {
        usersArray: state.users.usersArray,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        cityRenderer: cityRenderer,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
};

export default connect(mapStateToProps,
    {
        getUsers,
        follow,
        unfollow,
        setCurrentPage,
    })(UsersContainer);