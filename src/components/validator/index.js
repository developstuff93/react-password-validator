import React from "react";
import "./style.scss";

const Validator = ({ validations }) => {
  return (
    <div className="validators" data-testid="validators">
      <span>Your password must contain:</span>
      <ul className="validators-list">
        {validations.map(({ key, status, description }) => (
          <li key={key} className={status ? "passing" : "failing"}>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Validator;
