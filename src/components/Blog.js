// Blog.js
import React from 'react';


const Blog = () => {
    return (
        <section id="blog" className="py-5">
            <div className="container">
                <h2 className="text-center skills-title mb-4">Blog</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <BlogCard title="New Start" author="iim7md11" description="I Start A New Way to Develop Website And Discord Bot and more things to do in my new Way." />
                    </div>
                    <div className="col-md-4 mb-4">
                        <BlogCard title="Soon!" author="iim7md11" description="Soon!" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <BlogCard title="Soon!" author="iim7md11" description="Soon!" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const BlogCard = ({ title, author, description }) => {
    return (
        <div className="card shadow-sm blog-card animate__animated animate__fadeInUp">
            <div className="card-body">
                <h3 className="card-title skills-title">{title}</h3>
                <p className="card-text"><i className="fa fa-check-circle text-success" aria-hidden="true"></i> <span className="text-primary">{author}</span></p>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Blog;
