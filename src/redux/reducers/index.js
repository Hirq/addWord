// const initialStateOld = {
//   words: [
//     {
//       id: 1,
//       wordPl: 'mug',
//       wordAng: 'kubek',
//       created: '1 day',
//     },
//     {
//       id: 2,
//       wordPl: 'mysz',
//       wordAng: 'mouse',
//       created: '1 day',
//     },
//     {
//       id: 3,
//       wordPl: 'obraz',
//       wordAng: 'picture',
//       created: '1 day',
//     },
//     {
//       id: 4,
//       wordPl: 'dom',
//       wordAng: 'house',
//       created: '1 day',
//     },
//   ],

//   notes: [
//     {
//       id: 0,
//       title: 'pierwsza strona',
//       content:
//         'zrobic przycisk dla dodawania set listy - nastepnie pytanie czy na poewno chcesz usunac set liste? - przycisk przenies slowo do setlisty - select box, do ktorej, a najlepiej multibox, ze do 2 naraz i usuwamy przycisk z listy wtedy',
//       date: '12.12.2012',
//       tag: 'work',
//     },
//     {
//       id: 1,
//       title: 'Cele',
//       content:
//         'Poprawić CARD + GridTemplate + Blog - odpowienie propsy przekazać. Następnie REDUX - Dodawania, usuwanie i na koncu edycja bloga - react select dla nowego wpisu na blog',
//       date: '12.12.2012',
//       tag: 'work',
//     },
//     {
//       id: 2,
//       title: 'Nie robimy tego',
//       content:
//         'Storybook ODPADA - Dwa bledy w consoli - jeden to zwiazany z styled-component ze podaje link jako true, a drugi to w TIMER do poprawy na potem',
//       date: '05.01.1910',
//       tag: 'home',
//     },
//     {
//       id: 3,
//       title: 'tez zrobić trzeba to',
//       content:
//         'Poprawić widok listy + dodać notatki podobne do bloga - coś w stylu to do zrobić i tez panel po prawej stronie z możliwościa ',
//       date: '11.07.2018',
//       tag: 'adventure',
//     },
//     {
//       id: 4,
//       title: 'Rejestracje ogarnac i logowanie ? Chyba ze coś innego sie pojawi szybciej no i firebase podpiąc w końcu kiedyś - ale to chyba na końcu',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//       date: '31.03.2022',
//       tag: 'work',
//     },
//   ],

//   wordSets: [
//     {
//       id: 1,
//       title: 'SIZE',
//       wordsX: [
//         {
//           id: 1,
//           wordPl: 'aas',
//           wordAng: 'hodsause', 
//         },
//         {
//           id:2,
//           wordPl: 'dom',
//           wordAng: 'house', 
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: 'SCHOOL',
//       wordsX: [
//         {
//           id:3,
//           wordPl: 'dom',
//           wordAng: 'house', 
//         },
//         {
//           id:4,
//           wordPl: 'dom',
//           wordAng: 'house', 
//         },
//       ],
//     },
//   ]
// }

const initialState = {
  words: {
    allIds: ['1','2','3','4'],
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

  blogs: [
    {
      id: 6,
      title: 'Logowanie',
      content:
        'Czy logowanie tez zrobic przy uzyciu REDUX? mysle ze tak + nastepnie zrobic panel do tworzenia konta i logowania - ale nie wymagac logowania, automatycznie logowac jako uzytkownik test/test'
        ,
      date: '12.12.2012',
      tag: ['Work'],
    },
    {
      id: 5,
      title: 'Teraz to',
      content:
        'Zrobic porzadek z wpisami na blogu i note, nastepnie zajac sie tworzeniem panelu administratora a później poprawić responsywność calej aplikacji '
        ,
      date: '12.12.2012',
      tag: ['Work'],
    },
    {
      id: 0,
      title: 'pierwsza strona',
      content:
        'zrobic przycisk dla dodawania set listy - nastepnie pytanie czy na poewno chcesz usunac set liste? - przycisk przenies slowo do setlisty - select box, do ktorej, a najlepiej multibox, ze do 2 naraz i usuwamy przycisk z listy wtedy' +
        ' &&  usuwanie z setlisty pierwszego elementu dobrze- ale jak chcemy usunac odrazu drugi(czyli w sumie juz pierwszy to nie dziala za 1 przycisikem tylko drugim - dlaczego ? '
        ,
      date: '12.12.2012',
      tag: ['Done'],
    },
    {
      id: 1,
      title: 'Cele',
      content:
        'Poprawić CARD + GridTemplate + Blog - odpowienie propsy przekazać. Następnie REDUX - Dodawania, usuwanie i na koncu edycja bloga - react select dla nowego wpisu na blog',
      date: '12.12.2012',
      tag: ['Done'],
    },
    {
      id: 2,
      title: 'Nie robimy tego',
      content:
        'Storybook ODPADA - Dwa bledy w consoli - jeden to zwiazany z styled-component ze podaje link jako true, a drugi to w TIMER do poprawy na potem',
      date: '05.01.1910',
      tag: ['Done'],
    },
    {
      id: 3,
      title: 'tez zrobić trzeba to',
      content:
        'Poprawić widok listy + dodać notatki podobne do bloga - coś w stylu to do zrobić i tez panel po prawej stronie z możliwościa ',
      date: '11.07.2018',
      tag: ['Internet','Done'],
    },
    {
      id: 4,
      title: 'Rejestracje ogarnac i logowanie ? Chyba ze coś innego sie pojawi szybciej no i firebase podpiąc w końcu kiedyś - ale to chyba na końcu',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      date: '31.03.2022',
      tag: ['Work','Job'],
    },
  ],

  wordSets: {
    allIds: [901,902],
    byId: {
      901: {
        id: 901,
        title: 'SIZE',
        allIdWords: ['5','6'],
        words: {
          5: {
            wordPl: 'duzy',
            wordAng: 'large'
          },
          6: {
            wordPl: 'maly',
            wordAng: 'small'
          }  
        },
      },
      902: {
        id: 902,
        title: 'SCHOOL',
        allIdWords: ['7','8'],
        words: {
          7: {
            wordPl: 'klasa',
            wordAng: 'class'
          },
          8: {
            wordPl: 'nauczyciel',
            wordAng: 'teacher'
          }  
        },
      },
    }
  },

  notes: [
    {
      id: 84,
      title: 'Notatki w wersji todo - czyli dodawanie nowego elementu do tego zbioru',
      content:
        'test',
      date: '19.05.2021',
      archived: false,
    },
    {
      id: 85,
      title: 'Settigs - tam ustawiamy jakie mamy filtry, lub jakis przycisk na blogu, gdzie otwieramy okno, w którym ustalamy filtry - jak usuniemy istniejacy to ustawiamy na brak filtrow - po potwierdzeniu ze taki jest (przeszukanie bazy)',
      content:
        'test',
      date: '19.05.2021',
      archived: false,
    },
    {
      id: 86,
      title: 'Filtry - szukanie po nazwie, a przy blogu po nazwie lub tagu, ktory wybieramy z listy',
      content:
        'test',
      date: '19.05.2021',
      archived: true,
    },
    {
      id: 87,
      title: 'Dodać archiwum dla notatek - ktore wyświetalmy po nacisnieciu przycisku',
      content:
        'test',
      date: '19.05.2021',
      archived: true,
    },
    {
      id: 88,
      title: 'select react - dodac do listy',
      content:
        'test',
      date: '19.05.2021',
      archived: false,
    },
    {
      id: 89,
      title: 'select react - w tablicy naszej options przeszukac pod jakim ID są nasze zaznaczone elementy na EDIT i wtedy takie wyswietlic w react select - Chyba nalezy przeslać parametr z Details, bo w NewElementBar jako default nie chce wyswietlic, choc dotarlem do ID elementow z naszej listy Tagow',
      content:
        'test',
      date: '19.05.2021',
      archived: true,
    },
    {
      id: 90,
      title: 'PropsType',
      content:
        'ToDO',
      date: '19.05.2021',
      archived: false,
    },
    {
      id: 91,
      title: 'Filtorowanie po nazwie lub tagu i dodac input select, zeby moc dodac kilka słówek do jego zbioru z /list',
      content:
        '',
      date: '19.05.2021',
      archived: true,
    },
    {
      id: 92,
      title: 'Zegar ogarnąc',
      content:
        '',
      date: '19.05.2021',
      archived: false,
    },
    {
      id: 93,
      title: 'Zrobione',
      content:
        'Poprawic widok notatek' + ' NewBlogBar - wyciagnac z reduxa na jakiej jest sciezce DevToolsRedux i wtedy na podstawie tych danych dodać albo bloga albo notatke',
      date: '13.05.2021',
      archived: true,
    },
    {
      id: 94,
      title: 'Zrobione',
      content:
        'NewElementBar - action przekazac jako parametr, a nie jako stringa - i przemyslec w jaki sposob czytelny zaprogramowac ten plik .js nastepnie ogarnac REDUX',
      date: '08.05.2021',
      archived: true,
    },
    {
      id: 95,
      title: 'Panel logowania / rejestracji',
      content:
        'test',
      date: '08.05.2021',
      archived: false,
    }
  ],

  tags: [
    { value: 'Book', label: 'Book', id: 0},
    { value: 'Video', label: 'Video', id: 1 },  
    { value: 'Internet', label: 'Internet', id: 2 },
    { value: 'Story', label: 'Story', id: 3 },
    { value: 'Diary', label: 'Diary', id: 4 },
    { value: 'Job', label: 'Job', id: 5 },
    { value: 'Holiday', label: 'Holiday', id: 6 },
    { value: 'Work', label: 'Work', id: 7 },
    { value: 'Done', label: 'Done', id: 8 }
  ],
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'ADD_WORD':
      return {
        ...state, 
        words : { 
          allIds:[...state.words.allIds, action.payload.word.id], 
          byId:{...state.words.byId, [action.payload.word.id]: action.payload.word}
        }
      };
    case 'REMOVE_WORD':
      const id_word = action.payload.id   
      delete state.words.byId[id_word]
      return {
        ...state,
        words : { 
          allIds: state.words.allIds.filter((id) => id !== id_word),
          byId: state.words.byId
        }
      };
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.payload.blog],
      }
    case 'REMOVE_BLOG':
      const id_blog = action.payload.id      
      return {
        ...state,
        blogs: state.blogs.filter((blogs) => blogs.id !== id_blog)
      }; 
    case 'EDIT_BLOG':
      const id_blog_edit = action.payload.id;
      const title_blog_edit = action.payload.title;
      const content_blog_edit = action.payload.content;
      const tag_blog_edit = action.payload.tag;
      return {
        ...state,
        blogs: state.blogs.map(blog => blog.id === id_blog_edit ?
          {
            id: id_blog_edit,
            title: title_blog_edit,
            content: content_blog_edit,
            tag: tag_blog_edit,
            date: blog.date,
          } : blog
        )
      };
    case 'ADD_SET':
      return {
        ...state,
        wordSets : { 
          allIds:[...state.wordSets.allIds, action.payload.wordSet.id], 
          byId:{...state.wordSets.byId, [action.payload.wordSet.id]: action.payload.wordSet}
        }
      };
    case 'REMOVE_SET':
      const idSetRemove = action.payload.id   
      delete state.wordSets.byId[idSetRemove]   
      return {
        ...state,
        wordSets: {
          allIds: state.wordSets.allIds.filter((id) => id !== idSetRemove),
          byId: state.wordSets.byId,
        }
      }; 
    case 'ADD_WORD_TO_SET':
      const idWord = action.payload.idWord
      const idSet = action.payload.idSet
      const nameSet = action.payload.nameSet;
      const newWord = action.payload.newWord;
       return {
        ...state,
        wordSets : { 
          allIds: [...state.wordSets.allIds],
          byId:{...state.wordSets.byId, 
            [idSet]: {
              'id': idSet, 
              'title': nameSet,
              ['allIdWords']: [...state.wordSets.byId[idSet].allIdWords,idWord], 
              ['words']: {...state.wordSets.byId[idSet].words, [idWord]: newWord},
            }
          }
          // byId:{...state.wordSets.byId, [action.payload.idSet]: {[idWord]: action.payload.newWord}}
        }
      };
    case 'REMOVE_WORD_USE_NAME':
      const idWordDel = action.payload.idWord 
      const idSetDel = action.payload.idSet 
      delete state.wordSets.byId[idSetDel].words[idWordDel]
      return {
        ...state,
        wordSets: {
          allIds: [...state.wordSets.allIds],
          byId:{...state.wordSets.byId, 
            [idSetDel]: {
              'id': idSetDel, 
              'title': state.wordSets.byId[idSetDel].title,
              ['allIdWords']: state.wordSets.byId[idSetDel].allIdWords.filter((id) => id + '' !== idWordDel),  // +idWordDel - change String to Int // id + '' - change Int to String
              ['words']: state.wordSets.byId[idSetDel].words,
            },
          },
        }, 
      };
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };
    case 'REMOVE_NOTE':
      const id_note = action.payload.id      
      return {
        ...state,
        notes: state.notes.filter((notes) => notes.id !== id_note)
      }; 
    case 'EDIT_NOTE':
      const id_note_edit = action.payload.id;
      const title_note_edit = action.payload.title;
      const content_note_edit = action.payload.content;
      const archived_note_edit = action.payload.archived;
      return {
        ...state,
        notes: state.notes.map(note => note.id === id_note_edit ? 
          {
            id: id_note_edit,
            title: title_note_edit,
            content: content_note_edit,
            date: note.date,
            archived: archived_note_edit 
          } 
          : note
        )
      };
      case 'ADD_TAG':
        return {
          ...state,
          tags: [...state.tags, action.payload.tag],
        };
      case 'REMOVE_TAG':
        const id_tag = action.payload.id      
        return {
          ...state,
          tags: state.tags.filter((tags) => tags.id !== id_tag)
        }; 

  default:
    return state;
  }
};

export default rootReducer;