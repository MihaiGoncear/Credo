import "./assets/styles.sass";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={""}
                />
            </Routes>
        </Router>
    );
}

export default App;
