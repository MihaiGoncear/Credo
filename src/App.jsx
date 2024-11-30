import React from "react";
import "./assets/styles.sass";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "Components/Header/Header";
import Home from "Components/Pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
