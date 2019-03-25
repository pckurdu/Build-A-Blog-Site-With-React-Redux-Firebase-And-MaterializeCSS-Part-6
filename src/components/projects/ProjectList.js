import React from 'react'
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
    {/* we can use as much projectSummary as we want. */}
      {projects && projects.map(project=>{
        //We are forwarding with project.id.
        return (
          <Link to={'/project/'+project.id}>
            <ProjectSummary project={project} key={project.id}/>
          </Link>
        )
      })}

    </div>
  )
}

export default ProjectList