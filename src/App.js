import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;


