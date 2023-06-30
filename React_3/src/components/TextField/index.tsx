import "./TextField.css";

interface TextFieldProps {
  beChanged: (value: string) => void;
  placeholder: string;
  label: string;
  value: string;
  required: boolean;
}

const TextField = ({beChanged,label, value, required, placeholder }: TextFieldProps) => {
  const modifiedPlaceHolder = `${placeholder}`;

  const onTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    beChanged(event.target.value);
  };

  return (
    <div className="textField">
      <label>{label}</label>
      <input
        value={value}
        onChange={onTyping}
        required={required}
        placeholder={modifiedPlaceHolder}
      />
    </div>
  );
};

export default TextField;
