import React, { useEffect } from "react";
import "./assets/styles.sass";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Header from "Components/Header/Header";
import Home from "Components/Pages/Home/Home";
import Footer from "Components/Footer/Footer";
import Contacts from "Components/Pages/Contacts/Contacts";
import Admin from "Components/Pages/Admin/Admin";
import { useDispatch } from "react-redux";
import { setLanguage } from "./redux/slices/languageSlice";

function App() {
    const location = useLocation();
    const isAdminPage = location.pathname.includes("/admin");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("language")) {
            dispatch(setLanguage(localStorage.getItem("language") || "rom"));
        }
    }, [dispatch]);

    return (
        <>
            <Header isAdmin={isAdminPage} />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/contacts'
                    element={<Contacts />}
                />
                <Route
                    path='/admin'
                    element={<Admin />}
                />
            </Routes>
            {!isAdminPage && <Footer />}
        </>
    );
}

export default function AppWrapper() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
