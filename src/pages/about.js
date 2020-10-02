import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const About = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is my personal site.</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
};

export default About;
