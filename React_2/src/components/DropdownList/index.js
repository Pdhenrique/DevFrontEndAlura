import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdownList">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.beChanged(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
