import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate'
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const notes = [
  {
    id: 1,
    title: 'Cele',
    content:
      'Poprawić CARD + GridTemplate + Blog - odpowienie propsy przekazać. Następnie REDUX - Dodawania, usuwanie i na koncu edycja bloga',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 3,
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const StyledButton = styled(Button)`

`;

const Blog = () => {
  return (
  <GridTemplate>
    {notes.map(({ title, content, created, id }) => (
      <Card
        id={id}
        title={title}
        content={content}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
  )
}

export default Blog;








// const Articles = ({ articles }) => (
//   <GridTemplate>
//     {articles.map(({ title, content, articleUrl, created, id }) => (
//       <Card
//         id={id}
//         title={title}
//         content={content}
//         articleUrl={articleUrl}
//         created={created}
//         key={id}
//       />
//     ))}
//   </GridTemplate>
// );
