import React from "react";
import { Paper } from "@material-ui/core";
import "./card.css";
import { Draggable } from "react-beautiful-dnd";

function Card({ card, index, image }) {
  return (
    <Draggable draggableId={card.id} index={index} image={image}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className="cardStyle">{card.title} </Paper>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
