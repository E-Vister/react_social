import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header isAuth={this.props.isAuth} name={this.props.name} logout={this.props.logout}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        name: state.auth.name,
    }
}

export default connect(mapStateToProps, {getUserData: getAuthUserData, logout})(HeaderContainer);