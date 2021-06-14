import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedProject: null
        }
    }

    onProjectSelect(project) {
        this.setState({ selectedProject: project });
    }

    renderProject(project) {
        if (project != null)
            return (
                <Card>
                    <CardImg top src={project.image} alt={project.name} />
                    <CardBody>
                        <CardTitle>{project.name}</CardTitle>
                        <CardText>{project.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const projectList = this.props.projects.map((project) => {
            return (
                <div className="col-12 col-md-3">
                    <Card key={project.id}>
                        <CardImg width="100%" src={project.image} alt={project.name} />
                        <CardTitle><strong>{project.name}</strong></CardTitle>
                        <CardText>Description: {project.description}</CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {projectList}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderProject(this.state.selectedProject)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;