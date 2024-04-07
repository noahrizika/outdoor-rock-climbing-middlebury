import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Map from './components/Map';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import RoadsideBoulders from "./pages/RoadsideBoulders";
import HPBoulders from "./pages/HPBoulders";
import MGHome from './pages/MiddGapHome';
import Announcements from './pages/Announcements';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/Announcements">
                            <Announcements />
                        </Route>
                        <Route exact path="/MiddGap">
                            <MGHome />
                        </Route>
                        <Route exact path="/RoadsideBoulders">
                            <RoadsideBoulders />
                        </Route>
                        <Route exact path="/HPBoulders">
                            <HPBoulders />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;