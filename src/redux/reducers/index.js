const initialState = {
  words : [
    {
      id: 1,
      wordPl: 'mug',
      wordAng: 'kubek',
      created: '1 day',
    },
    {
      id: 2,
      wordPl: 'mysz',
      wordAng: 'mouse',
      created: '1 day',
    },
    {
      id: 3,
      wordPl: 'obraz',
      wordAng: 'picture',
      created: '1 day',
    },
    {
      id: 4,
      wordPl: 'dom',
      wordAng: 'house',
      created: '1 day',
    },
  ],

  notes : [
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
        'Storybook + narzednia react',
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
  ],
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
    return {
      ...state,
      words: [...state.words, action.payload.word],
    }
    case 'REMOVE_WORD':
      const idd = action.payload.id      
      return {
        ...state,
        words: state.words.filter((words) => words.id !== idd)
      }; 
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      }
    case 'REMOVE_NOTE':
      const id = action.payload.id      
      return {
        ...state,
        notes: state.notes.filter((notes) => notes.id !== id)
      }; 
  default:
    return state;
  }
};

export default rootReducer;