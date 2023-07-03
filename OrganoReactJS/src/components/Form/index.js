import "./Form.css";

import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  
  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const [image, setImage] = useState("");

  const [squad, setSquad] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.beRegisterCollaborator({
      name,
      role,
      image,
      squad
    })
    setName('')
    setRole('')
    setImage('')
    setSquad('')
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>fill in the data to create the collaborator's card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="type your name"
          value={name}
          beChanged={(name) => setName(name)}
        />
        <TextField
          required={true}
          label="Role"
          placeholder="type your role"
          value={role}
          beChanged={(role) => setRole(role)}
        />
        <TextField
          required={true}
          label="Image"
          placeholder="enter image address "
          value={image}
          beChanged={(image) => setImage(image)}
        />
        <DropdownList
          label="squad"
          itens={props.squads}
          value={squad}
          beChanged={(squad) => setSquad(squad)}
        />
        <Button children="Create card" />
      </form>
    </section>
  );
};

export default Form;
