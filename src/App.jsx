import React from 'react';
import Container from './styled/Container';
import { NormalPicture } from './styled/Pictures';
import Welcome from './components/Welcome';
import Stacks from './components/Stacks';
import picture from './assets/images/my_photo.jpeg';


function App() {
  return (
    <Container>
      <NormalPicture
        $maxWidth="125px"
        $maxHeight="150px"
        src={ picture } alt=""
      />
      <Welcome />
      <Stacks />
    </Container>
  );
}

export default App;
