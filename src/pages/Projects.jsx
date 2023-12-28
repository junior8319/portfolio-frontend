import React from 'react';
import Container from '../styled/Container';
import { Title1 } from '../styled/Titles';
import ProjectsComponent from '../components/ProjectsComp';
import Article from '../styled/Article';

const Projects = () => {
  return (
    <Container
      $flexWrap='wrap'
    >
      <Article
        $width='100%'
        $display='block'
        $backgroundColor='transparent'
        $margin='0'
        $padding='5px'
      >
        <Title1>Meus Projetos</Title1>
      </Article>
      <ProjectsComponent />
      </Container>
  );
};

export default Projects;
