import { useState } from "react";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Squads from "./components/Squads";
import Footer from './components/Footer'

const App = () => {
  const squads = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="app">
      <Banner />
      <Form
        squads={squads.map((squad) => squad.name)}
        beRegisterCollaborator={(collaborator) => newCollaborator(collaborator)}
      />
      {squads.map((squad) => (
        <Squads
          key={squad.name}
          name={squad.name}
          primaryColor={squad.primaryColor}
          secondaryColor={squad.secondaryColor}
          collaborator={collaborators}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.squad === squad.name
          )}
        />
      ))}
      <Footer/>
    </div>
  );
};

export default App;
