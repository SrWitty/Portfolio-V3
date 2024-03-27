// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-d6dff8 text-white text-center py-4">
            <div className="container">
                <p className="text-muted mb-0">
                &copy; {new Date().getFullYear()} Made with <span role="img" aria-label="heart">❤️</span> by <b>iim7md11</b>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
