import React, { useState, useContext } from 'react';

const ListContext = React.createContext();
const ListUpdateContext = React.createContext();
const WordAngContext = React.createContext();
const WordPlContext = React.createContext();
const WordAngUpdateContext = React.createContext();
const WordPlUpdateContext = React.createContext();

export function useList(){
  return useContext(ListContext);
}

export function useListUpdate(){
  return useContext(ListUpdateContext);
}

export function useWordAngUpdate(){
  return useContext(WordAngContext);
}

export function useWordPlUpdate(){
  return useContext(WordPlContext);
}

export function useWordAngUpdate2(){
  return useContext(WordAngUpdateContext);
}

export function useWordPlUpdate2(){
  return useContext(WordPlUpdateContext);
}

export function AddWordContext({children}) {
  const [wordPl, setWordPl] = useState("");
  const [wordAng, setWordAng] = useState("");
  const [list, setList] = useState([]);

  function addToList(e){
    setList(prevState => [...prevState, { wordAng: wordAng, wordPl: wordPl }]);
    setWordPl();
    setWordAng();
    e.preventDefault();
  }

  return(
      <ListContext.Provider value = {list}>
        <WordPlContext.Provider value = {wordPl} >
        <WordAngContext.Provider value = {wordAng}>
        <WordPlUpdateContext.Provider value = {setWordPl}>
        <WordAngUpdateContext.Provider value = {setWordAng}>
        <ListUpdateContext.Provider value = {addToList}>
          {children}
        </ListUpdateContext.Provider>
        </WordAngUpdateContext.Provider>
        </WordPlUpdateContext.Provider>
        </WordAngContext.Provider>
        </WordPlContext.Provider>
      </ListContext.Provider>
  )
}