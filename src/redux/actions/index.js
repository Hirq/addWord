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

export const addSet = (wordSetContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_SET',
    payload: {
      note: {
        id: getId(),
        ...wordSetContent
      }
    }
  }
};

export const removeSet = (id) => {
  return {
    type: 'REMOVE_SET',
    payload: {
      id
    },
  };
};

export const addWordToSet = (word, id) => {
  return {
    type: 'ADD_WORD_TO_SET',
    payload: {
      word
    },
  };
};