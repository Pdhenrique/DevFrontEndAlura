import "./Collaborator.css";

interface CollaboratorProps{
  name: string,
  image: string,
  role: string,
  backgroundStyle: string,
  date: string
}

const Collaborator = ({ name, image, role, backgroundStyle, date }: CollaboratorProps) => {
  return (
    <div className="collaborator">
      <div className="headerCard" style={{backgroundColor: backgroundStyle}}>
        <img src={image} alt={name} />
      </div>
      <div className="footerCard">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h5>{new Date(date).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
