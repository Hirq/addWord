export const addWord = (wordContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_WORD',
    payload: {
      word: {
        id: getId(),
        ...wordContent,
      },
    },
  };
};

export const removeWord = (id) => {
  return {
    type: 'REMOVE_WORD',
    payload: {
      id
    },
  };
};

export const addNote = (noteContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_NOTE',
    payload: {
      note: {
        id: getId(),
        ...noteContent
      }
    }
  }
};

export const removeNote = (id) => {
  return {
    type: 'REMOVE_NOTE',
    payload: {
      id
    },
  };
};