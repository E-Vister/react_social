import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";


const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Navbar navbar={props.state.navbar}/>
            <Content state={props.state} addPost={props.addPost}/>
        </div>
    );
}

export default App;


