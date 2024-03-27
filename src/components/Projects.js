import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCube } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id="projects" className="bg-d6dff8 py-5">
            <div className="container">
                <h2 className="text-center skills-title mb-4">Projects</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <ProjectCard
                            title="Discord Bot Website"
                            author="iim7md11"
                            description="Welcome to the official website repository for our Discord bot. This website serves as a hub of information, updates, and support for our Discord community."
                            githubLink="https://github.com/iim7md11/Discord-Bot-Website"
                            websiteLink="https://iim7md11.github.io/Discord-Bot-Website/" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <ProjectCard
                            title="Portfolio Website"
                            author="iim7md11"
                            description="Welcome to my personal portfolio website! This project is an upgraded version of the original personal portfolio, now built using React.js. This second version includes several new features, updates to the design, additional pages, and refined color schemes."
                            githubLink="https://github.com/iim7md11/Portfolio-Website"
                            websiteLink="https://iim7md11.github.io/Portfolio-Website/" 
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <ProjectCard
                            title="Trix.db"
                            author="iim7md11"
                            description="Trix Database is a powerful Node.js package for managing data with built-in support for encryption, MongoDB integration, and caching. It provides an intuitive interface for storing, retrieving, and manipulating data efficiently. "
                            githubLink="https://github.com/iim7md11/Trix.db"
                            npmLink="https://www.npmjs.com/package/trix.db"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const ProjectCard = ({ title, author, description, githubLink, websiteLink, npmLink }) => {
    const redirectToGitHub = () => {
        window.open(githubLink, '_blank');
    };

    const redirectToLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="card shadow-sm project-card">
            <div className="card-body">
                <h3 className="card-title skills-title">{title}</h3>
                <p className="card-text"><i className="fa fa-check-circle text-success" aria-hidden="true"></i> By <span className="text-primary">{author}</span></p>
                <p className="card-text"><b>{description}</b></p>
                <div className="row align-items-center">
                    <div className="col">
                        {githubLink && (
                            <div className="mt-3">
                                <a href={githubLink} target="_blank" rel="noopener noreferrer" onClick={redirectToGitHub} className="btn btn-dark btn-sm mr-2">
                                    <i className="fab fa-github mr-1"></i> Code
                                </a>
                            </div>
                        )}
                        {websiteLink && (
                            <div className="mt-3">
                                <button className="btn btn-primary btn-sm mr-2" onClick={() => redirectToLink(websiteLink)}>
                                    <FontAwesomeIcon icon={faGlobe} className="mr-1" /> Website
                                </button>
                            </div>
                        )}
                        {npmLink && (
                            <div className="mt-3">
                                <button className="btn btn-success btn-sm" onClick={() => redirectToLink(npmLink)}>
                                    <FontAwesomeIcon icon={faCube} className="mr-1" /> npm
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
