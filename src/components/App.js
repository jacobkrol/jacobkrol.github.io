import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Nav from './utilities/Nav';
import Footer from './utilities/Footer';
import ScrollToTop from './utilities/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import Error404Page from './pages/Error404Page';

function App() {
    return (
        <Router baseline="/">
            <ScrollToTop />
            <div id="page-container">
                <Nav />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={Error404Page} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
