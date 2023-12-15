import classNames from "classnames";
import React, { useMemo } from "react";
import { useState } from "react";

import Validator from "../validator/validator";

import { Validators } from "../../utils";

const Submission = () => {
  const [touched, setTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [success, setSuccess] = useState(false);

  const validations = useMemo(() => {
    return Validators.map(({ validator, ...props }) => ({
      ...props,
      status: validator.test(password),
    }));
  }, [password]);
  const isValidPwd = useMemo(
    () => validations.every(({ status }) => status),
    [validations]
  );
  const isMatching = useMemo(
    () => password === pwdConfirm,
    [password, pwdConfirm]
  );

  const handlePasswordChange = (e) => {
    setSuccess(false);
    if (!touched) {
      setTouched(true);
    }
    setPassword(e.target.value);
  };
  const handlePwdConfirmChange = (e) => {
    setPwdConfirm(e.target.value);
  };
  const handleSubmit = () => {
    setTouched(false);
    setSuccess(true);
  };

  const isSubmissionDisabled = useMemo(
    () => !isValidPwd || !isMatching || success,
    [isValidPwd, isMatching, success]
  );

  return (
    <div className="submission-dialog">
      <header className="submission-header">
        <h1>React Password Validator</h1>
      </header>
      <div className="submission-form">
        <div className="submission-body">
          <input
            data-testid="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <input
            data-testid="password-confirm"
            value={pwdConfirm}
            onChange={handlePwdConfirmChange}
            placeholder="Confirm Password"
          />
          {touched && !isMatching && (
            <span data-testid="error" className="error">
              <span className="error-icon" /> Passwords don't match
            </span>
          )}
          {success && (
            <span data-testid="success" className="success">
              Success!
            </span>
          )}
        </div>
        {touched && !success && <Validator validations={validations} />}
        <div className="submission-submit">
          <button
            className={classNames("submit-btn", {
              disabled: isSubmissionDisabled,
            })}
            disabled={isSubmissionDisabled}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
