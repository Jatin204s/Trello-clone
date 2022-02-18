import React, { useState, useContext } from "react";
import { InputBase } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import DataAPI from "../../utils/DataAPI";
import "./title.css";

function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(DataAPI);

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: "input",
            }}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className="titleContainer">
          <h3 onClick={() => setOpen(!open)} className="editableTitle">
            {title}
          </h3>
          <MoreHoriz className="morehoriz" />
        </div>
      )}
    </div>
  );
}

export default Title;
