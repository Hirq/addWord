const initialState = {
  words: [
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

  notes: [
    {
      id: 0,
      title: 'pierwsza strona',
      content:
        'zrobic przycisk dla dodawania set listy - nastepnie pytanie czy na poewno chcesz usunac set liste? - przycisk przenies slowo do setlisty - select box, do ktorej, a najlepiej multibox, ze do 2 naraz i usuwamy przycisk z listy wtedy',
      date: '12.12.2012',
      tag: 'work',
    },
    {
      id: 1,
      title: 'Cele',
      content:
        'Poprawić CARD + GridTemplate + Blog - odpowienie propsy przekazać. Następnie REDUX - Dodawania, usuwanie i na koncu edycja bloga - react select dla nowego wpisu na blog',
      date: '12.12.2012',
      tag: 'work',
    },
    {
      id: 2,
      title: 'Nie robimy tego',
      content:
        'Storybook ODPADA',
      date: '05.01.1910',
      tag: 'home',
    },
    {
      id: 3,
      title: 'tez zrobić trzeba to',
      content:
        'Poprawić widok listy + dodać notatki podobne do bloga - coś w stylu to do zrobić i tez panel po prawej stronie z możliwościa ',
      date: '11.07.2018',
      tag: 'adventure',
    },
    {
      id: 4,
      title: 'Rejestracje ogarnac i logowanie ? Chyba ze coś innego sie pojawi szybciej no i firebase podpiąc w końcu kiedyś - ale to chyba na końcu',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '31.03.2022',
      tag: 'work',
    },
  ],

  wordSets: [
    {
      id: 1,
      title: 'SIZE',
      words: ['big','small'],
    },
    {
      id: 2,
      title: 'SCHOOL',
      words: ['class', 'chair'],
    },
    {
      id: 3,
      title: 'WORK',
      words: ['laptop'],
    },
    {
      id: 4,
      title: 'CITY',
      words: ['capital', 'market'],
    },
  ]
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
    case 'ADD_SET':
      return {
        ...state,
        wordSets: [...state.wordSets, action.payload.note],
      }
    case 'REMOVE_SET':
      const idSet = action.payload.id      
      return {
        ...state,
        wordSets: state.wordSets.filter((wordSets) => wordSets.id !== idSet)
      }; 
    case 'ADD_WORD_TO_SET':
       const idSetForWord = action.payload.id
      // return {
      //   ...state,
      //   wordSets: [...state.wordSets.words.concat(action.payload.word)]
      // };
      // return [
      //   ...state.wordSets.words.slice(0, action.payload.id),
      //   action.payload.word,
      //   ...state.wordSets.words.slice(action.payload.id)
      // ]

  default:
    return state;
  }
};

export default rootReducer;