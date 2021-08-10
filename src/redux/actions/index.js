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

export const addBlog = (blogContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_BLOG',
    payload: {
      blog: {
        id: getId(),
        ...blogContent
      }
    }
  }
};

export const removeBlog = (id) => {
  return {
    type: 'REMOVE_BLOG',
    payload: {
      id
    },
  };
};

export const editBlog = (id, title, content, tag) => {
  return {
    type: 'EDIT_BLOG',
    payload: {
      id,
      title,
      content,
      tag,
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
      wordSet: {
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

export const addWordToSet = (word, idWord, idSet, nameSet) => {
  return {
    type: 'ADD_WORD_TO_SET',
    payload: {
      idSet: idSet,
      idWord: idWord,
      nameSet: nameSet,
      newWord: {
        ...word,
      },
    },
  };
};

export const removeWordUseName = (idWord, idSet) => {
  return {
    type: 'REMOVE_WORD_USE_NAME',
    payload: {
      idWord: idWord,
      idSet: idSet
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

export const editNote = (id, title, content, archived) => {
  return {
    type: 'EDIT_NOTE',
    payload: {
      id,
      title,
      content,
      archived
    },
  };
};
