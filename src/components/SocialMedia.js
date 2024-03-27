import React from 'react';

const SocialMedia = () => {
    return (
        <section id="social" className="bg-d6dff8 py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <a target="_blank" rel="noreferrer" href="https://discord.com/users/1091118468155314306" className="social-link mb-4 animate__animated animate__fadeInLeft">
                            <i className="fab fa-discord"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/iim7md11_" className="social-link mb-4 animate__animated animate__fadeInUp">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/iim7md11" className="social-link mb-4 animate__animated animate__fadeInRight">
                            <i className="fab fa-github"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/iim7md11_/" className="social-link mb-4 animate__animated animate__fadeInDown">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;
