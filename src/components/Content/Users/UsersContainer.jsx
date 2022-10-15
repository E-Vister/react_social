import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import React from 'react';
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

        let url = `http://localhost:5000/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`;

        axios.get(url).then(res => {
                this.props.switchIsFetchingStatus(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.switchIsFetchingStatus(true);

        let url = `http://localhost:5000/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`;

        axios.get(url).then(res => {
                this.props.switchIsFetchingStatus(false);
                this.props.setUsers(res.data.items);
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