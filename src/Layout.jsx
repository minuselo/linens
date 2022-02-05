import Header from "./Components/header/Header";
import React from "react";
import Footer from "./Components/footer/Footer";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export {Layout};