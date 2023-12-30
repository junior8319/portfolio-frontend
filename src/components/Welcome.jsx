import React from 'react';
import Article from '../styled/Article';
import { SimpleP } from '../styled/Paragraphs';
import { Title1 } from '../styled/Titles';

const Welcome = () => {
  return (
    <Article
      $width='45%'
      $height='92.5%'
      $overflowY='auto'
      $padding={ 0 }
      $width1200='75%'
    >
      <Title1>Boas vindas ao meu portfólio,</Title1>
      <SimpleP>Meu nome é Antonio Carlos</SimpleP>
      <SimpleP>Sou Cientista de Dados em formação pela Universidade Virtual do Estado de São Paulo.</SimpleP>
      <SimpleP>Também sou desenvolvedor web full-stack formado em 2022 pela instituição Trybe.</SimpleP>
      <SimpleP>
        Busco a troca de idéias para disseminar conhecimento e para isso dedico uma seção deste portal a publicar artigos.
        Nessa seção haverá artigos que serão compartilhados com intenção de fazer contribuições acadêmicas (ou simplesmente técnicas com a melhor didática que minhas habilidades permitirem) ao assunto, os quais poderão receber devolutivas com sugestões e comentários.
      </SimpleP>
      <SimpleP>
        Sempre que for algum artigo tratando de alguma aplicação desenvolvida, haverá a possibilidade de contribuir com o seu 
        desenvolvimento seja para melhoria da ferramenta, refatoração de código ou resolução de problemas(bugs). 
      </SimpleP>
      <SimpleP>Então, obrigado por estar aqui e espero que seja um tempo proveitoso para você!</SimpleP>
    </Article>
  );
};

export default Welcome;
