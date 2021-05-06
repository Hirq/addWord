const initialStateOld = {
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
        'Storybook ODPADA - Dwa bledy w consoli - jeden to zwiazany z styled-component ze podaje link jako true, a drugi to w TIMER do poprawy na potem',
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
      wordsX: [
        {
          id: 1,
          wordPl: 'aas',
          wordAng: 'hodsause', 
        },
        {
          id:2,
          wordPl: 'dom',
          wordAng: 'house', 
        },
      ],
    },
    {
      id: 2,
      title: 'SCHOOL',
      wordsX: [
        {
          id:3,
          wordPl: 'dom',
          wordAng: 'house', 
        },
        {
          id:4,
          wordPl: 'dom',
          wordAng: 'house', 
        },
      ],
    },
  ]
}

const initialState = {
  words: {
    allIds: [1,2,3,4],
    byId:{
      1: {
        wordPl: 'kubek',
        wordAng: 'mug',
        created: '1 day',
      },
      2: {
        wordPl: 'mysz',
        wordAng: 'mouse',
        created: '2 day',
      },
      3: {
        wordPl: 'obraz',
        wordAng: 'picture',
        created: '1 day',
      },
      4: {
        wordPl: 'dom',
        wordAng: 'house',
        created: '11 day',
      },
    }
  },

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
        'Storybook ODPADA - Dwa bledy w consoli - jeden to zwiazany z styled-component ze podaje link jako true, a drugi to w TIMER do poprawy na potem',
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

  wordSets: {
    allIds: [901,902],
    byId: {
      901: {
        title: 'SIZE',
        words: [1],
      },
      902: {
        title: 'SCHOOL',
        words: [2],
      },
    }
  }
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
    return {
      ...state,
      words : { 
        allIds:[...state.words.allIds, action.payload.word.id], 
        byId:{...state.words.byId, [action.payload.word.id]: action.payload.word}
      }

//  {...state.words.byId, [action.payload.word.id]: action.payload.word}


      // words: [...state.words.allIds, action.payload.word.id]
      // words: {...state.words.byId, [action.payload.word.id]: action.payload.word}
    }
    // case 'ADD_WORD':
    // return {
    //   ...state,
    //   words: [...state.words, action.payload.word],
    // }
    // case 'REMOVE_WORD':
    //   const idd = action.payload.id      
    //   return {
    //     ...state,
    //     words: state.words.filter((words) => words.id !== idd)
    //   };    
    case 'REMOVE_WORD':
      const idd = action.payload.id      
      return {
        ...state,
        words: state.words.allIds.filter((words) => words !== idd),
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
    // case 'ADD_WORD_TO_SET':
    //    const idSetForWord = action.payload.id
      // return {
      //   ...state,
      //   wordSets: [...state.wordSets.words.concat(action.payload.word)]
      // };
      // return [
      //   ...state.wordSets.words.slice(0, action.payload.id),
      //   action.payload.word,
      //   ...state.wordSets.words.slice(action.payload.id)
      // ]
    case 'REMOVE_WORD_USE_NAME':
      const item = action.payload.item; 
      return {
        ...state,
        // wordSets: state.wordSets.filter((wordSets) => (wordSets.words.id !== item))
        wordSets: state.wordSets.filter((wordsX) => wordsX.id !== item)
        // wordSets: state.wordSets.filter(() => state.wordSets[1].words.id !== item)
        
      }; 

  default:
    return state;
  }
};

export default rootReducer;