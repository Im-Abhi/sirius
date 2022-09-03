import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Editor from "../pages/Editor";

const App = () => (
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/editor" element={<Editor />} />
            </Routes>
        </Router>
    </>
);

export default App;
