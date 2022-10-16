import {connect} from "react-redux";
import Users from "./Users";
import React from 'react';
import {getUsers} from "../../../api/api";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    switchIsFetchingStatus,
    unfollow
} from "../../../redux/users-reducer";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.switchIsFetchingStatus(true);

        getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.switchIsFetchingStatus(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.switchIsFetchingStatus(true);

        getUsers(this.props.pageSize, pageNumber).then(data => {
                this.props.switchIsFetchingStatus(false);
                this.props.setUsers(data.items);
            }
        );
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
                      isFetching={this.props.isFetching}/>
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
    }
};

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        switchIsFetchingStatus
    })(UsersAPIContainer);

export default UsersContainer;