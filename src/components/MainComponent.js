import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './AppWrapper/HeaderComponent';
import Project from './ProjectComponent';
import Footer from './AppWrapper/FooterComponent';
import Resume from './ResumeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import { PROJECTS } from '../shared/projects'

const Main = () => {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default Main;
