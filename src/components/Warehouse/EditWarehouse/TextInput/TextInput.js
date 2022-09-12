import "./TextInput.scss";
import error from "../../../../assets/icons/error-24px.svg";

function TextInput({
  name,
  label,
  value,
  formValid,
  isValid,
  formName,
  setValid,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event);
    setValid({ ...formValid, [formName]: true });
  };

  return (
    <>
      <label className="input__label" htmlFor="warehouseName">
        {label}
        <input
          name={name}
          className={`input${!isValid ? " input--not-valid" : ""}`}
          type="text"
          onChange={handleChange}
          value={value}
        />
        <div
          className={`error-message${
            !isValid ? " error-message--visible" : ""
          }`}
        >
          <img className="error-message__img" src={error} alt="Error icon " />
          <p className="error-message__text">This field is required</p>
        </div>
      </label>
    </>
  );
}

export default TextInput;
