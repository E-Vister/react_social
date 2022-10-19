import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    function RedirectComponent (props) {
        if (!props.isAuth) return <Navigate to={'/login'}/>

        return <Component {...props}/>
    }

    return connect(mapStateToProps, {})(RedirectComponent);
}