import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import './App.css';
import Posts from "../components/Posts";
import PostForm from "../components/PostForm";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <PostForm />
        </div>
    </Provider>
  );
}

export default App;
