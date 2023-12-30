import { useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import Article from '../styled/Article';
import { Title1 } from '../styled/Titles';
import Carousel from './Carousel';
import Loading from './Loading';
import StacksContainer from '../styled/StacksContainer';
import ControlBarComp from './ControlBarComp';

const Stacks = () => {
  const [stacks, setStacks] = useState([]);
  
  useEffect(() => {
    getStacks()
      .then(data => setStacks(data));
  }, []);

  useEffect(() => {}, [stacks]);

  return (
    (stacks && stacks.length)
    ?
      <StacksContainer>
        <Title1>Ferramentas que conheço:</Title1>
        <Carousel cards={ stacks } />
        <ControlBarComp intervalTime={ 30000 } />
      </StacksContainer>
    :
      <Article>
        <Loading />
      </Article>
  );
};

export default Stacks;
