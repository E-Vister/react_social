import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {getAuthMe} from "../../api/api";

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        getAuthMe().then(data => {
            if (data.resultCode === 0) {
                this.props.setUserData(
                    data.loginData.id,
                    data.loginData.login,
                    data.loginData.name,
                    data.loginData.surname,
                );
            }
        });
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
    setUserData,
})(HeaderAPIContainer);

export default HeaderContainer;