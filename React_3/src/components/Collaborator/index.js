import "./Collaborator.css";

const Collaborator = ({ name, image, role, backgroundStyle }) => {
  return (
    <div className="collaborator">
      <div className="headerCard" style={{backgroundColor: backgroundStyle}}>
        <img src={image} alt={name} />
      </div>
      <div className="footerCard">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
