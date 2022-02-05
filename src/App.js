import './App.css';
import {useDispatch} from "react-redux";
import React from "react";
import Header from "./Components/header/Header";
import MainPage from "./Components/mainPage/MainPage";
import Footer from "./Components/footer/Footer";
import {Routes, Route} from "react-router-dom";
import Categories from "./Components/categories/Categories";
import {Layout} from "./Layout";

function App() {
    const dispatch = useDispatch();
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="categories/*" element={<Categories/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
