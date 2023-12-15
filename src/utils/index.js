export const Validators = [
  {
    key: "minLength",
    validator: /^.{6,}$/,
    description: "At least 6 characters",
  },
  {
    key: "uppercase",
    validator: /[A-Z]/,
    description: "At least 1 uppercase character",
  },
  {
    key: "lowercase",
    validator: /[a-z]/,
    description: "At least 1 lowercase character",
  },
  {
    key: "number",
    validator: /\d/,
    description: "At least 1 number",
  },
  {
    key: "speical",
    validator: /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/,
    description: `At least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`,
  },
];
