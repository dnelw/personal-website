import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Experience, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
