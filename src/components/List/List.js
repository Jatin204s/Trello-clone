import { Paper } from "@material-ui/core";
import "./list.css";
import React from "react";
import Title from "../Title/Title";
import Card from "../Card/Card";
import InputContainer from "../Input/InputContainer";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

function List({ list, index }) {
  console.log("listtt", list);
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Paper className="container" {...provided.dragHandleProps}>
            <Title title={list.title} listId={list.id} />
            <hr />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  className="cardContainer"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {list.cards.map((card, index) => (
                    <div>
                      <img className="cardImage" src={card.image} alt=""></img>
                      <Card
                        key={card.id}
                        card={card}
                        index={index}
                        img={card.image}
                      />
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  );
}

export default List;
