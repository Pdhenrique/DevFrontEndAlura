import "./DropdownList.css";

interface DropdownListProps{
  required: boolean,
  beChanged: (value: string) => void,
  value: string,
  label: string,
  itens: string[]
}

const DropdownList = (props: DropdownListProps) => {
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
