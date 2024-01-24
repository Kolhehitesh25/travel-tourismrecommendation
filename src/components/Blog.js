import React from 'react';
import './Blog.css';
import image1 from '../assets/images/Tourism-Blogs.jpg';
import image2 from '../assets/images/Adventure-Blog.jpg';
import image3 from '../assets/images/Cultural-Blog.png';

const blogs = [
  {
    title: 'Exploring Hidden Gems',
    image: image1,
    description: 'Discover the beauty of remote locations and hidden gems around the world.',
  },
  {
    title: 'Adventures in the Wild',
    image: image2,
    description: 'Embark on thrilling adventures in the wilderness and experience nature at its best.',
  },
  {
    title: 'Cultural Journeys',
    image: image3,
    description: 'Immerse yourself in the rich cultures and traditions of diverse communities.',
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <h2>Travel Blog</h2>
      <div className="blog-posts">
        {blogs.map((blog, index) => (
          <div className="blog-post" key={index}>
            <img src={blog.image} alt={`Blog Post ${index + 1}`} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

