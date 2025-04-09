import { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const Project = (passedProjects: any) => {
  const [selectedProject, setSelectedProject] = useState();
  const projectList = passedProjects.map((project: any) => {
    return (
      <div className="col-12 col-md-3">
        <Card key={project.id}>
          <CardImg width="100%" src={project.image} alt={project.name} />
          <CardTitle>
            <strong>{project.name}</strong>
          </CardTitle>
          <CardText>Description: {project.description}</CardText>
        </Card>
      </div>
    );
  });

  //   const onProjectSelect = (project: any) => setSelectedProject(project);

  const renderProject = (project: any) => {
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
    else return <div></div>;
  };

  return (
    <div className="container">
      <div className="row">{projectList}</div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {renderProject(selectedProject)}
        </div>
      </div>
    </div>
  );
};

export default Project;
