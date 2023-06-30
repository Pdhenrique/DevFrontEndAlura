import "./TextField.css";

interface TextFieldProps {
  beChanged: (value: string) => void;
  placeholder: string;
  label: string;
  value: string;
  required: boolean;
  type?: "text" | "passowrd" | "date" | "email" | "number";
}

const TextField = ({
  beChanged,
  label,
  value,
  required,
  placeholder,
  type = "text",
}: TextFieldProps) => {
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
        type={type}
      />
    </div>
  );
};

export default TextField;
