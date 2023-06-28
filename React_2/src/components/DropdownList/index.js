import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdownList">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
