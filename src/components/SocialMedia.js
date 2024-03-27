import React from 'react';

const SocialMedia = () => {
    return (
        <section id="social" className="bg-d6dff8 py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <a href="/" className="text-dark mb-4 icon-link animate__animated animate__fadeInLeft" style={{ marginRight: '20px' }}> {/* Added animation classes */}
                            <i className="fab fa-discord" style={{ fontSize: '3.5rem' }}></i> {/* Decreased icon size */}
                        </a>
                        <a href="/" className="text-dark mb-4 icon-link animate__animated animate__fadeInUp" style={{ marginRight: '20px' }}> {/* Added animation classes */}
                            <i className="fab fa-xing-square" style={{ fontSize: '3.5rem' }}></i> {/* Decreased icon size */}
                        </a>
                        <a href="/" className="text-dark mb-4 icon-link animate__animated animate__fadeInRight" style={{ marginRight: '20px' }}> {/* Added animation classes */}
                            <i className="fab fa-github-square" style={{ fontSize: '3.5rem' }}></i> {/* Decreased icon size */}
                        </a>
                        <a href="/" className="text-dark mb-4 icon-link animate__animated animate__fadeInDown"> {/* Added animation classes */}
                            <i className="fab fa-instagram-square" style={{ fontSize: '3.5rem' }}></i> {/* Decreased icon size */}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;
