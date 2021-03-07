import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import {useList} from 'theme/AddWordContext';

const List = () => {
  const list = useList();

  return(
    <UserPageTemplate>
      Wyzerować inputy po dodaniu słowa - bo state jest skasowany - udalo sie za pomoca klasy
      teraz przeslac te dane tutaj za pomoca Context API o ile można w clasie?? a jak nie to REDUX

      {list.map((item, key) =>
        <h1 key={item.id}>{item.wordAng}-{item.wordPl} </h1>
        )
      }

    </UserPageTemplate>
  )
};
export default List;