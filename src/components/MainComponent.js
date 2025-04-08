import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './AppWrapper/HeaderComponent';
import Project from './ProjectComponent';
import Footer from './AppWrapper/FooterComponent';
import Resume from './ResumeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import { PROJECTS } from '../shared/projects'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch location={this.props.location}>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' render={() => <Project projects={this.state.projects}/>} />
                    <Route exact path='/resume' render={() => <Resume />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
