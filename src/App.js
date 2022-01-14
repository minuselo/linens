import './App.css';
import {useDispatch} from "react-redux";
import {main} from "./store/mainSlice";
import React from "react";
import Header from "./Components/header/Header";
import Products from "./Components/mainPage/products/Products";
import MainPage from "./Components/mainPage/MainPage";

function App() {
    const dispatch = useDispatch();
    return (
        <div className="App">
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
