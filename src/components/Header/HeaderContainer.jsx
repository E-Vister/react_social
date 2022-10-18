import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData} from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} name={this.props.name}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        name: state.auth.name,
    }
}

const HeaderContainer = connect(mapStateToProps, {
    getUserData,
})(HeaderAPIContainer);

export default HeaderContainer;