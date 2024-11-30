import "./assets/styles.sass";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "Components/Header/Header";
import Home from "Components/Pages/Home/Home";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
            </Routes>
        </Router>
    );
}

export default App;
