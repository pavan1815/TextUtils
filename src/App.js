import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("dark");

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "currentcolor";

        }
        else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    }

    return (
        <>
            {/* <Router> */}
                <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
                <div className="container my-3">
                    {/* <Routes> */}
                        {/* <Route path="/" element={<TextForm heading="Enter text below to analyze" mode={mode} />} >
                        </Route>
                        <Route path="/about" element={<About mode={mode} />}>
                        </Route> */}
                    {/* </Routes> */}
                    <TextForm heading="Enter text below to analyze" mode={mode}/>
                </div>
            {/* </Router> */}
        </>
    );
}

export default App;
