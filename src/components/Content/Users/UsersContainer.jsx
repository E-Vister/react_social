import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC} from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    let cityRenderer = (location) => {
        return (location.state) ? `${location.city}, ${location.state}` : `${location.city}`
    }

    return {
        usersArray: state.users.usersArray,
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;