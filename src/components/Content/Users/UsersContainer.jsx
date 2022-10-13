import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC} from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    let cityRenderer = (location) => {
        return (location.state) ? `${location.city}, ${location.state}` : `${location.city}`
    }

    return {
        usersArray: state.users.usersArray,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        cityRenderer: cityRenderer
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;