import React from "react";

const Validator = ({ validations }) => {
  return (
    <div className="submission-validators" data-testid="validators">
      <ul>
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
