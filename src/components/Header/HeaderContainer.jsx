import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

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

export default connect(mapStateToProps, {getUserData, logout})(HeaderContainer);