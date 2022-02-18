import React, { useState, useContext } from "react";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import DataAPI from "../../utils/DataAPI";
import "./inputCard.css";

function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(DataAPI);
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtn = () => {
    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }
  };
  return (
    <div>
      <div>
        <Paper className="card">
          <InputBase
            className="input"
            onChange={handleOnChange}
            multiline
            fullWidth
            value={title}
            placeholder={
              type === "card"
                ? "Enter a title of this card.."
                : "Enter list title..."
            }
          />
        </Paper>
      </div>
      <div>
        <button className="addButton" onClick={handleBtn}>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <IconButton onClick={() => setOpen(false)}>
          <Clear />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
