import { useContext } from 'react';
import { StacksContext } from '../context/Contexts';
import { Title2, Title3 } from '../styled/Titles';
import { CardPicture } from '../styled/Pictures';
import { SimpleP } from '../styled/Paragraphs';
import Content from '../styled/Content';
import { InnerContent } from '../styled/Container';
import Link from '../styled/Link';

const Carousel = () => {
  const { stacks, currentStackIndex } = useContext(StacksContext);

  return (
    (stacks && stacks.length > 0) &&
      <Content
        key={stacks[currentStackIndex].id}
      >
        <InnerContent>
          <Title2>{ stacks[currentStackIndex].title }</Title2>
          <CardPicture src={ stacks[currentStackIndex].imageUrl } alt={ stacks[currentStackIndex].title } />
        </InnerContent>
        
        <InnerContent
          $padding={ '15px 5px 30px 5px' }
        >
          <SimpleP $padding={ '0 0 0 10px' } $width={ '95%' }>{ stacks[currentStackIndex].description }</SimpleP>
        </InnerContent>
        
        <InnerContent
          $padding={ '0 5px 15px 5px' }
        >
          <Title3>Documentação:</Title3>

          <Link href={ stacks[currentStackIndex].stackDocsUrl } target="_blank" rel="noopener noreferrer">
            <SimpleP $padding={ '0 0 0 10px' }>{ stacks[currentStackIndex].stackDocsUrl }</SimpleP>
          </Link>
        </InnerContent>

        <InnerContent
          $padding={ '0 5px 30px 5px' }
        >
          <Title3>Página da Ferramenta:</Title3>
          <Link href={ stacks[currentStackIndex].stackUrl } target="_blank" rel="noopener noreferrer">
            <SimpleP $padding={ '0 0 0 10px' }>{ stacks[currentStackIndex].stackUrl }</SimpleP>
          </Link>
        </InnerContent>
      </Content>
  );
}

export default Carousel;
