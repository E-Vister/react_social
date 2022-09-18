import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';
import {addPost, updatePostField, subscribe} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePostField={updatePostField}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);
