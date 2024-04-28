import { useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import Article from '../styled/Article';
import { Title1, Title3 } from '../styled/Titles';
import Carousel from './Carousel';
import Loading from './Loading';
import StacksContainer from '../styled/StacksContainer';
import ControlBarComp from './ControlBarComp';

const Stacks = () => {
  const [stacks, setStacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getStacks()
      .then(data => setStacks(data))
      .catch(error => {
        console.error(error);
        setStacks([]);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {}, [stacks]);

  return (
    (stacks && stacks.length && stacks.length > 0 && !isLoading)
    ?
      <StacksContainer>
        <Title1>Ferramentas que conheço:</Title1>
        <Carousel cards={ stacks } />
        <ControlBarComp intervalTime={ 30000 } />
      </StacksContainer>
    :
      <Article>
        { isLoading
          ?
            (
              <Loading />
            )
          :
            (
              <Title3>
                Este componente está em manutenção, desculpe pelo transtorno.
              </Title3>
            )
        }
      </Article>
  );
};

export default Stacks;
