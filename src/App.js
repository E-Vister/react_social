import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <></>

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <Content/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);


