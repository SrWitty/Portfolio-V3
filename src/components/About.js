import React from 'react';

const About = () => {
    const isCircular = true; 

    
    const imageStyle = {
        borderRadius: isCircular ? '50%' : '0%',
    };

    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4 about-title">About Me</h2>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 text-center">
                        <img 
                            src="./images/logo.png" 
                            alt="Logo" 
                            className="mb-4 rounded-circle img-fluid hoverable" 
                            style={imageStyle}
                        />
                    </div>
                    <div className="col-md-8">
                        <p className="text-muted about-text">Hello, I'm <b>iim7md11</b>, a seasoned <b>developer</b> with a passion for crafting innovative solutions and enhancing user experiences. With over 3 years of hands-on experience in the field, I specialize in a diverse range of programming languages, markup languages, frameworks, and database technologies. Vivamus auctor auctor magna, nec tristique enim efficitur vel.</p>
                        <p className="text-muted about-text">In terms of <b>programming languages</b>, I excel in PHP and JavaScript, leveraging their power to build dynamic and interactive web applications. I'm adept at handling server-side logic, creating responsive front-end interfaces, and ensuring seamless communication between the two.</p>
                        <p className="text-muted about-text">My proficiency extends to <b>markup languages</b> such as HTML and CSS, where I leverage their capabilities to structure and style web content, ensuring visually appealing and accessible user interfaces.</p>
                        <p className="text-muted about-text">When it comes to <b>frameworks</b>, I am well-versed in Bootstrap for front-end development, harnessing its grid system and components to streamline the design process and achieve consistent layouts across different devices. Additionally, I have expertise in Express.js for building robust and scalable server-side applications, leveraging its minimalist and flexible architecture.</p>
                        <p className="text-muted about-text">In the realm of <b>database languages</b>, I have a strong command of MongoDB and MySQL, enabling me to efficiently manage and manipulate data, implement robust data storage solutions, and optimize database performance to meet project requirements.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
