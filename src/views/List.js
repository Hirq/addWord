import React from 'react';
import Heading from 'components/atoms/Heading';
import UserPageTemplate from 'templates/UserPageTemplate';
import {useList} from 'theme/AddWordContext';


const List = () => {
  const list = useList();

  return(
    <UserPageTemplate>
      <Heading> Word List </Heading>
      {list.map((item, key) =>
        <h1 key={item.id}>{item.wordAng}-{item.wordPl} </h1>
        )
      }

    </UserPageTemplate>
  )
};
export default List;