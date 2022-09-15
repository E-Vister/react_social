import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";


const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Content posts={props.posts} dialogs={props.dialogs}/>
        </div>
    );
}

export default App;


