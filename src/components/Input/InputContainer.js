import { Collapse, Paper } from "@material-ui/core";
import React, { useState } from "react";
import InputCard from "./InputCard";
import "./inputContainer.css";

function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper className="addCard" elevation={0} onClick={() => setOpen(!open)}>
          <h3>{type === "card" ? "+ Add a Card" : "+ Add another List"}</h3>
        </Paper>
      </Collapse>
    </div>
  );
}

export default InputContainer;
