import React from "react";
import "./assets/styles.sass";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Header from "Components/Header/Header";
import Home from "Components/Pages/Home/Home";
import Footer from "Components/Footer/Footer";
import Contacts from "Components/Pages/Contacts/Contacts";
import Admin from "Components/Pages/Admin/Admin";

function App() {
    const location = useLocation();
    const isAdminPage = location.pathname.includes("/admin");

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
