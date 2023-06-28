import "./Form.css";

import TextField from "../TextField";
import DropdownList from "../DropdownList";

const Form = () => {
  
  const squads = [
    'Programming',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Innovation and management'

  ]
  
  return (
    <section className="form">
      <form>
        <h2>fill in the data to create the collaborator's card</h2>
        <TextField label="Name" placeholder="type your name" />
        <TextField label="Role" placeholder="type your role" />
        <TextField label="Image" placeholder="enter image address " />
        <DropdownList label="squad" itens={squads}/>
      </form>
    </section>
  );
};

export default Form;
