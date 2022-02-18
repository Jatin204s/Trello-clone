import React, { useState } from "react";
import List from "./components/List/List";
import Data from "./utils/Data";
import DataAPI from "./utils/DataAPI";
import { v4 as uuid } from "uuid";
import InputContainer from "./components/Input/InputContainer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [data, setData] = useState(Data);
  const addMoreCard = (title, listId) => {
    console.log(title, listId);

    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log(
      "destination",
      destination,
      "source",
      source,
      "ID",
      draggableId
    );
    if (!destination) {
      return;
    }

    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <DataAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <Navbar />
      <div className="mainContainer">
        <Sidebar />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="mainList" type="list" direction="horizontal">
            {(provided) => (
              <div
                className="App"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  return <List list={list} key={listId} index={index} />;
                })}
                <InputContainer type="list" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </DataAPI.Provider>
  );
}

export default App;
