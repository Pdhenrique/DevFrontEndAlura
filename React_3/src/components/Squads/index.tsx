
import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import Collaborator from "../Collaborator";

import "./Squads.css";

interface SquadsProps {
  primaryColor: string;
  secondaryColor: string;
  name: string;
  collaborators: ICollaborator[];
}

const Squads = (props: SquadsProps) => {
  return props.collaborators.length > 0 ? (
    <section
      className="squad"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            backgroundStyle={props.primaryColor}
            key={collaborator.name}
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Squads;
