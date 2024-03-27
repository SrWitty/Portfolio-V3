import React from 'react';


const Skills = () => {
    return (
        <section id="skills" className="bg-d6dff8 py-5">
            <div className="container">
                <h2 className="text-center mb-4 skills-title animated bounceInDown">Skills</h2>
                <div className="row">
                    <SkillCard title="Languages" skills={["PHP", "JavaScript"]} icon="fas fa-code" animationDelay="0.1s" />
                    <SkillCard title="Markup Languages" skills={["HTML", "CSS"]} icon="fab fa-html5" animationDelay="0.2s" />
                    <SkillCard title="Framework Languages" skills={["Bootstrap", "Express"]} icon="fas fa-layer-group" animationDelay="0.3s" />
                    <SkillCard title="Database Languages" skills={["MongoDB", "MySQL"]} icon="fas fa-database" animationDelay="0.4s" />
                </div>
            </div>
        </section>
    );
}

const SkillCard = ({ title, skills, icon, animationDelay }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="card skill-card shadow animated fadeIn" style={{ animationDelay }}>
                <div className="card-body">
                    <h3 className="card-title"><i className={icon}></i>{title}</h3>
                    <ul className="list-unstyled mb-0">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
