import classNames from "classnames";
import { useState } from "react";
import "./style.scss";

const Input = ({ type, ...props }) => {
  const [inputType, setInputType] = useState(type);
  const togglePasswordType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="input-wrapper">
      <input type={inputType} {...props} />
      {type === "password" && (
        <button className="toggle-password-type" onClick={togglePasswordType}>
          <div
            aria-hidden
            className={classNames("toggle-icon", {
              "show-password": inputType === "password",
              "hide-password": inputType !== "password",
            })}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
