import React from "react";
import "./assets/styles.sass";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "Components/Header/Header";
import Home from "Components/Pages/Home/Home";
import Footer from "Components/Footer/Footer";
import Contacts from "Components/Pages/Contacts/Contacts";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/contacts'
                    element={<Contacts />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
