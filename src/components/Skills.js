import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="bg-d6dff8 py-5">
            <div className="container">
                <h2 className="text-center mb-4 skills-title">Skills</h2>
                <div className="row">
                    <SkillCard title="Languages" skills={["PHP", "JavaScript"]} icon="fas fa-code" />
                    <SkillCard title="Markup Languages" skills={["HTML", "CSS"]} icon="fab fa-html5" />
                    <SkillCard title="Framework Languages" skills={["Bootstrap", "Express"]} icon="fas fa-layer-group" />
                    <SkillCard title="Database Languages" skills={["MongoDB", "MySQL"]} icon="fas fa-database" />
                </div>
            </div>
        </section>
    );
}

const SkillCard = ({ title, skills, icon }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="card skill-card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title"><i className={icon} style={{ marginRight: '0.5rem' }}></i>{title}</h3>
                    <ul className="list-unstyled mb-0">
                      <b> {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}</b> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
